package ru.nsu.sber_portal.ccfit.services;

import org.jetbrains.annotations.NotNull;
import ru.nsu.sber_portal.ccfit.exceptions.DishNotFoundException;
import ru.nsu.sber_portal.ccfit.models.dto.*;
import ru.nsu.sber_portal.ccfit.models.entity.*;
import ru.nsu.sber_portal.ccfit.models.mappers.DishMapper;
import ru.nsu.sber_portal.ccfit.repositories.*;
import lombok.*;
import lombok.extern.slf4j.*;
import org.springframework.stereotype.*;

import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class DishService {
    private final RestaurantService restaurantService;

    private final DishRepository dishRepository;

    public Dish createDish(@NotNull DishFindDto dishFindDto,
                                  @NotNull Restaurant restaurant) {
        log.info("Create dish");
        return Optional.ofNullable(dishFindDto.getId())
                .flatMap(dishRepository::findById)
                .or(() -> Optional.ofNullable(dishRepository.findByRestaurantIdAndTitleIgnoreCase(restaurant.getId(),
                                                                                                  dishFindDto.getTitle())))
                .orElseThrow(() -> new DishNotFoundException(restaurant.getNameRestaurant()));
    }

    public DishDto getDishDto(String titleRest, @NotNull DishFindDto dishFindDto) {
        log.info("Create dish dto");
        Restaurant restaurant = restaurantService.createRestaurant(titleRest);
        Dish dish = createDish(dishFindDto, restaurant);
        return DishMapper.mapperToDto(dish);
    }
}
