package yandex.alice.models.mappers;

import org.jetbrains.annotations.*;
import yandex.alice.models.dto.DishDto;
import yandex.alice.models.entity.Dish;


public class DishMapper {

    private DishMapper() {
        throw new UnsupportedOperationException("This class cannot be instantiated.");
    }

    @Contract("_ -> new")
    public static @NotNull Dish mapperToEntity(@NotNull DishDto dishDto) {
        Dish dish =  new Dish();
        dish.setId(dishDto.getId());
        dish.setTitle(dishDto.getTitle());
        dish.setDescription(dishDto.getDescription());
        dish.setPrice(dishDto.getPrice());
        dish.setWeight(dishDto.getWeight());
        dish.setIsStopList(dishDto.isStopList());
        dish.setLinkImage(dishDto.getLinkImage());
        return dish;
    }

    public static @NotNull DishDto mapperToDto(@NotNull Dish dish) {
        return new DishDto(dish.getId(),
                           dish.getTitle(),
                           dish.getDescription(),
                           dish.getPrice(),
                           dish.getWeight(),
                           dish.getIsStopList(),
                           dish.getLinkImage());
    }
}