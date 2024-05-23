package yandex.alice.services;

import lombok.extern.slf4j.Slf4j;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import yandex.alice.models.entity.CheckTable;
import yandex.alice.models.mappers.OrderMapper;
import yandex.alice.models.dto.orderDto.ChangeOrderDto;
import yandex.alice.models.dto.orderDto.OrderDto;
import yandex.alice.models.dto.orderDto.OrderPattern;
import yandex.alice.models.entity.Dish;
import yandex.alice.models.entity.Order;
import yandex.alice.models.entity.Restaurant;
import yandex.alice.repositories.CheckTableRepository;
import yandex.alice.repositories.DishRepository;
import yandex.alice.repositories.OrderRepository;

import javax.transaction.Transactional;
import java.util.*;

import static java.util.Optional.ofNullable;

@Service
@Slf4j
@Transactional
public class OrderService extends OrderCheckServiceUtility {
    private final DishService dishService;

    @Autowired
    public OrderService(OrderRepository orderRepository,
                        CheckTableRepository checkRepository,
                        DishRepository dishRepository,
                        RestaurantService restaurantService,
                        DishService dishService) {

        super(restaurantService,
              orderRepository,
              checkRepository,
              dishRepository);
        this.dishService = dishService;
    }

    public void changeOrder(@NotNull ChangeOrderDto changeOrderDto) {
        log.info("Change order");
        Order order = findOrder(changeOrderDto);
        order.setCount(changeOrderDto.getCount());
        orderRepository.saveAndFlush(order);
    }

    public @NotNull Order createOrderByCheck(@NotNull OrderDto orderDto,
                                             @NotNull CheckTable checkTable) {
        log.info("Create order by check id " + checkTable.getId());
        Dish dish = dishService.createDish(orderDto.getDishFindDto(),
                                           checkTable.getRestaurant());

        return ofNullable(orderRepository.findOrderByCheckIdAndDishId(checkTable.getId(), dish.getId()))
            .map(order -> {
                log.info("Order was found by dish id " + orderDto.getDishFindDto().getId());
                order.setCount(order.getCount() + orderDto.getCount());
                order.setPrice(order.getPrice() + dish.getPrice() * orderDto.getCount());
                orderRepository.save(order);
                return order;
            }).orElseGet(() -> {
                log.info("Order wasn't found");
                Order order = OrderMapper.mapToEntity(orderDto);
                order.setDishId(dish.getId());
                order.setPrice(dish.getPrice() * orderDto.getCount());
                order.setCheck(checkTable);
                checkTable.getOrders().add(order);
                checkRepository.save(checkTable);
                return order;
            });
    }

    protected Order findOrder(@NotNull OrderPattern deleteOrderDto) {
        return Optional.ofNullable(orderRepository
                        .findByDishIdAndNumberTable(deleteOrderDto.getDishFindDto().getId(),
                                                    deleteOrderDto.getNumberTable()))
                .orElseThrow(() -> new NoSuchElementException ("Dish id " + deleteOrderDto.getDishFindDto()
                        .getId() + " wasn't found"));
    }

    public void deleteOrder(@NotNull OrderPattern deleteOrderDto) {
        Order order = findOrder(deleteOrderDto);
        log.info("Delete order by id " + order.getId());
        CheckTable checkTable = order.getCheck();
        checkTable.setCost(checkTable.getCost() - order.getPrice());
        checkTable.getOrders().remove(order);
        checkRepository.save(checkTable);
    }

    public void addNewOrder(@NotNull OrderDto orderDto, String restName) {
        Restaurant restaurant = restaurantService.createRestaurant(restName);
        log.info("Restaurant id {}, Add new order", restaurant.getId());

        CheckTable checkTable = createCheckTable(orderDto.getNumberTable(),
                                                 restaurant);

        Dish dish = dishService.createDish(orderDto.getDishFindDto(), restaurant);

        settingCheckTable(checkTable,
                          orderDto.getNumberTable(),
              dish.getPrice() * orderDto.getCount(),
                          restaurant);

        log.info("Check table " + checkTable.getId());

        Order order = createOrderByCheck(orderDto, checkTable);
        log.info("Order Id " + order.getId() + " price " + order.getPrice());
    }
}