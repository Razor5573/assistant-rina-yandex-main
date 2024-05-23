package yandex.alice.services;

import lombok.extern.slf4j.Slf4j;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Service;
import yandex.alice.models.dto.orderDto.OrderPattern;
import yandex.alice.models.dto.CheckTableDto;
import yandex.alice.models.entity.CheckTable;
import yandex.alice.models.entity.Dish;
import yandex.alice.models.entity.Order;
import yandex.alice.models.entity.Restaurant;
import yandex.alice.models.enums.SessionStatus;
import yandex.alice.models.mappers.CheckMapper;
import yandex.alice.models.mappers.OrderMapper;
import yandex.alice.repositories.CheckTableRepository;
import yandex.alice.repositories.DishRepository;
import yandex.alice.repositories.OrderRepository;

import javax.transaction.Transactional;
import java.util.*;

@Service
@Slf4j
public class CheckService extends OrderCheckServiceUtility {

    private final OrderService orderService;

    public CheckService(OrderRepository orderRepository,
                        CheckTableRepository checkRepository,
                        DishRepository dishRepository,
                        RestaurantService restaurantService,
                        OrderService orderService) {

        super(restaurantService,
              orderRepository,
              checkRepository,
              dishRepository);
        this.orderService = orderService;
    }

    @Transactional
    public CheckTableDto getCheck(String nameRest, Integer numberTable) {
        log.info("Method get check for restaurant " + nameRest);

        Restaurant restaurant = restaurantService.createRestaurant(nameRest);

        log.info(" Id restaurant " + restaurant.getId());

        CheckTable checkTable = createCheckTable(numberTable, restaurant);
        checkTable.setRestaurant(restaurant);

        CheckTableDto checkTableDto = CheckMapper.mapperToDto(checkTable);

        log.info("Create check table dto");

        setListOrderFromEntityToDto(checkTable, checkTableDto);
        return checkTableDto;
    }

    public void checkDeleteOrder(@NotNull Order mainOrder,
                                 @NotNull OrderPattern payedOrderDto) {

        log.info("Call check delete order " + mainOrder.getId());
        mainOrder.setCount(mainOrder.getCount() - payedOrderDto.getCount());

        log.info("Before CheckDeleteOrder check id " + mainOrder.getCheck().getId() + " size " +  mainOrder.getCheck().getOrders().size());
        if(Objects.equals(mainOrder.getCount(), EMPTY_ORDER))
            orderService.deleteOrder(OrderMapper.mapToDto(mainOrder));
        else
            orderRepository.save(mainOrder);

        Order order = orderService.findOrder(OrderMapper.mapToDto(mainOrder));
        log.info("After CheckDeleteOrder check id " + order.getCheck().getId() + " size " +  order.getCheck().getOrders().size());
    }

    private void checkCalculation(@NotNull CheckTable check, @NotNull Set<OrderPattern> orders) {
        for(var order : orders) {
            Optional<Dish> dishOptional = dishRepository.findById(order.getDishFindDto().getId());
            dishOptional.ifPresent(dish -> check.setCost(check.getCost() + dish.getPrice()));
        }
    }

    @Transactional
    protected CheckTable createPaymentCheckTable(@NotNull Restaurant restaurant,
                                                 @NotNull CheckTableDto paymentCheckTableDto) {
        CheckTable paymentCheckTable = CheckMapper.mapperToEntity(paymentCheckTableDto);

        paymentCheckTable.setSessionStatus(SessionStatus.FINALIZED);
        paymentCheckTable.setRestaurant(restaurant);
        checkCalculation(paymentCheckTable, paymentCheckTableDto.getListOrderDto());
        restaurant.addCheckTable(paymentCheckTable);
        checkRepository.save(paymentCheckTable);
        return paymentCheckTable;
    }

    @Transactional
    public void payment(@NotNull String titleRest,
                        @NotNull CheckTableDto paymentCheckTableDto) {

        Restaurant restaurant = restaurantService.createRestaurant(titleRest);
        log.info("Method payment " + paymentCheckTableDto);

        paymentCheckTableDto.setRestId(restaurant.getId());
        CheckTable paymentCheckTable = createPaymentCheckTable(restaurant, paymentCheckTableDto);

        log.info("Payment " + paymentCheckTable);

        CheckTable mainCheckTable = createCheckTable(paymentCheckTable.getNumberTable(),
                                                     restaurant);

        checkRepository.save(mainCheckTable);

        log.info("Main check table toString(): " + mainCheckTable);
        log.info("Payed check table toString() " + paymentCheckTable);

        for(var orderDto : paymentCheckTableDto.getListOrderDto()) {
            mainCheckTable.getOrders().stream()
                .filter(o -> Objects.equals(o.getDishId(),
                                            orderDto.getDishFindDto().getId()))
                .forEach(o -> checkDeleteOrder(o, orderDto));
        }
    }
}