package yandex.alice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import yandex.alice.models.entity.CheckTable;
import yandex.alice.models.enums.SessionStatus;


@Repository
public interface CheckTableRepository extends JpaRepository<CheckTable, Long> {
    CheckTable findByNumberTableAndRestaurantIdAndSessionStatus(Integer numberTable,
                                                                Long id,
                                                                SessionStatus status);
}