package yandex.alice.services;

import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Service;
import yandex.alice.models.entity.CategoryMenu;
import yandex.alice.models.mappers.DishMapper;
import yandex.alice.exceptions.CategoryNotFoundException;
import yandex.alice.models.dto.CategoryDishesDto;
import yandex.alice.models.dto.DishFindDto;
import yandex.alice.models.entity.Dish;
import yandex.alice.models.entity.Restaurant;
import yandex.alice.repositories.CategoryMenuRepository;
import yandex.alice.repositories.DishRepository;


import javax.transaction.Transactional;
import java.util.*;

@Service
@Slf4j
@Data
@RequiredArgsConstructor
public class CategoryMenuService {

    private final DishRepository dishRepository;

    private final CategoryMenuRepository categoryMenuRepository;

    private final RestaurantService restaurantService;


    @Transactional
    public CategoryDishesDto getListDishByCategory(@NotNull String titleRest, @NotNull DishFindDto dishFindDto) {
        log.info("Get list by category_id {} and restaurant", dishFindDto.getId());

        Restaurant restaurant = restaurantService.createRestaurant(titleRest);

        CategoryMenu categoryMenu = Optional.ofNullable(dishFindDto.getId())
            .flatMap(categoryMenuRepository::findById)
            .or(() -> Optional.ofNullable(categoryMenuRepository.findByRestaurantIdAndTitleIgnoreCase(restaurant.getId(),
                                                                                                      dishFindDto.getTitle())))
            .orElseThrow(() -> new CategoryNotFoundException(titleRest));

        List<Dish> dishes = dishRepository
                                .findByCategoryMenuIdAndRestaurantId(categoryMenu.getId(),
                                                                     restaurant.getId());

        log.info("List dish size " + dishes.size());
        return new CategoryDishesDto(dishes.stream().map(DishMapper::mapperToDto).toList(),
                                     categoryMenu.getTitle());
    }
}