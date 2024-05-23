package yandex.alice.models.dto.orderDto;

import lombok.*;
import lombok.extern.slf4j.Slf4j;
import yandex.alice.models.dto.DishDto;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Slf4j
public class OrderDto extends OrderPattern {
    private Long price;

    private DishDto dishDto;
}