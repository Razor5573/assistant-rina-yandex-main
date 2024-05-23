package yandex.alice.services;

import org.jetbrains.annotations.NotNull;
import yandex.alice.exceptions.DishNotFoundException;
import yandex.alice.models.mappers.DishMapper;
import lombok.*;
import lombok.extern.slf4j.*;
import org.springframework.stereotype.*;
import yandex.alice.models.dto.DishDto;
import yandex.alice.models.dto.DishFindDto;
import yandex.alice.models.entity.Dish;
import yandex.alice.models.entity.Restaurant;
import yandex.alice.repositories.DishRepository;

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
