package yandex.alice.models.dto.orderDto;

import lombok.*;
import org.jetbrains.annotations.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChangeOrderDto extends OrderPattern {
    @NotNull
    boolean isIncrement;
}
