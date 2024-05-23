package yandex.alice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import yandex.alice.models.entity.Restaurant;

import java.util.Optional;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
    Optional<Restaurant> findByNameRestaurant(String nameRestaurant);

    Optional<Restaurant> findRestaurantByNameRestaurant(String nameRestaurant);

}
