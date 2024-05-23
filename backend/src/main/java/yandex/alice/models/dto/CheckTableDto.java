package yandex.alice.models.dto;

import lombok.*;
import yandex.alice.models.dto.orderDto.OrderDto;
import yandex.alice.models.dto.orderDto.OrderPattern;

import java.util.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CheckTableDto {
    private Set<OrderPattern> listOrderDto = new HashSet<>();

    private Integer numberTable;

    private Long restId;

    private Long cost = 0L;

    public void addOrderDto(OrderDto orderDto) {
        listOrderDto.add(orderDto);
    }
}