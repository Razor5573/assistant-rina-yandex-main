package yandex.alice.services;

import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.jetbrains.annotations.NotNull;
import yandex.alice.models.entity.CheckTable;
import yandex.alice.models.enums.SessionStatus;
import yandex.alice.exceptions.DishNotFoundException;
import yandex.alice.models.dto.CheckTableDto;
import yandex.alice.models.dto.orderDto.OrderDto;
import yandex.alice.models.entity.Dish;
import yandex.alice.models.entity.Restaurant;
import yandex.alice.models.mappers.DishMapper;
import yandex.alice.models.mappers.OrderMapper;
import yandex.alice.repositories.CheckTableRepository;
import yandex.alice.repositories.DishRepository;
import yandex.alice.repositories.OrderRepository;

import javax.transaction.Transactional;

import static java.util.Optional.ofNullable;

@RequiredArgsConstructor
@Slf4j
public class OrderCheckServiceUtility {

    protected static final Long EMPTY_ORDER = 0L;

    protected static final Long EMPTY_PRICE = 0L;

    protected final RestaurantService restaurantService;

    protected final OrderRepository orderRepository;

    protected final CheckTableRepository checkRepository;

    protected final DishRepository dishRepository;

    public void settingCheckTable(@NotNull CheckTable checkTable,
                                  @NotNull Integer numberTable,
                                  @NotNull Long increasePrice,
                                  @NotNull Restaurant rest) {

        log.info("Setting check table");
        checkTable.setCost(increasePrice + checkTable.getCost());
        checkTable.setNumberTable(numberTable);
        checkTable.setSessionStatus(SessionStatus.PLACED);
        checkTable.setRestaurant(rest);
    }

    @Transactional
    protected CheckTable createCheckTable(@NotNull Integer numberTable,
                                          @NotNull Restaurant restaurant) {
        return ofNullable(checkRepository
            .findByNumberTableAndRestaurantIdAndSessionStatus(
                numberTable,
                restaurant.getId(),
                SessionStatus.PLACED
            ))
            .orElseGet(() -> {
                CheckTable checkTable = new CheckTable();
                settingCheckTable(checkTable,
                                  numberTable,
                                  EMPTY_PRICE,
                                  restaurant);
                restaurant.addCheckTable(checkTable);
                checkRepository.save(checkTable);
                return checkTable;
            });
    }

    @Transactional
    public void setListOrderFromEntityToDto(@NotNull CheckTable checkTable,
                                            @NotNull CheckTableDto checkTableDto) {
        for(var order : checkTable.getOrders()) {

            OrderDto orderDto = OrderMapper.mapToDto(order);
            log.info("Info order dish id " + order.getDishId() +
                     " count " + order.getCount() +
                     " price " + order.getPrice());

            Dish dish = dishRepository.findById(order.getDishId())
                .orElseThrow(() -> new DishNotFoundException("Dish id " + order.getDishId()));

            orderDto.setDishDto(
                DishMapper.mapperToDto(dish)
            );

            checkTableDto.addOrderDto(orderDto);
        }
    }
}