package yandex.alice.models.dto.orderDto;

import lombok.*;
import lombok.extern.slf4j.Slf4j;
import yandex.alice.models.dto.DishFindDto;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Slf4j
public class OrderPattern {

    protected DishFindDto dishFindDto = new DishFindDto();

    protected Integer numberTable;

    protected Long count;
}