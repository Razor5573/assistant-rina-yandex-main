package yandex.alice.models.mappers;

import yandex.alice.models.dto.ReviewDto;
import yandex.alice.models.entity.Review;
import org.jetbrains.annotations.*;

public class ReviewMapper {

    @Contract("_ -> new")
    public static @NotNull Review mapperToEntity(@NotNull ReviewDto reviewDto) {
        Review review = new Review();
        review.setScore(reviewDto.getScore());
        review.setText(reviewDto.getText());
        return review;
    }

    @Contract("_ -> new")
    public static @NotNull ReviewDto mapperToDto(@NotNull Review review) {
        return new ReviewDto(review.getScore(), review.getText());
    }
}
