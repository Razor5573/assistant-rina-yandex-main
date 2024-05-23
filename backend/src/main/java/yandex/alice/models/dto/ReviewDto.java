package yandex.alice.models.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReviewDto {
    private Byte score;

    private String text;
}
