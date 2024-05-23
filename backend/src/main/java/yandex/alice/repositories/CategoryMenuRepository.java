package yandex.alice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import yandex.alice.models.entity.CategoryMenu;

@Repository
public interface CategoryMenuRepository extends JpaRepository<CategoryMenu, Long> {
    CategoryMenu findByRestaurantIdAndTitleIgnoreCase(Long restId, String titleCategory);
}
