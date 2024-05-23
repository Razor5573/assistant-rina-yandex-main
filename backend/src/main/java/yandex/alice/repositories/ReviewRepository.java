package yandex.alice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import yandex.alice.models.entity.Restaurant;
import yandex.alice.models.entity.Review;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> getListByRestaurant(Restaurant restaurant);
}
