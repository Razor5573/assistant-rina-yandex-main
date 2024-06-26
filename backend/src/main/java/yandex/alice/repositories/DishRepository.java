package yandex.alice.repositories;

import yandex.alice.models.entity.Dish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DishRepository extends JpaRepository<Dish, Long> {

    List<Dish> findByCategoryMenuIdAndRestaurantId(Long categoryId , Long restId);

    Dish findByRestaurantIdAndTitleIgnoreCase(Long restId, String titleDish);
}