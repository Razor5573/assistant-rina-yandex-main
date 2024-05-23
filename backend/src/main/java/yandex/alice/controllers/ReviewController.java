package yandex.alice.controllers;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import yandex.alice.models.dto.ReviewDto;
import yandex.alice.services.ReviewService;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/backend", produces = "application/json")
@RestController
@RequiredArgsConstructor
@Slf4j
public class ReviewController {

    private final ReviewService reviewService;

    @PostMapping(value = "/{titleRest}/review")
    public ResponseEntity<Void> addNewReview(@PathVariable String titleRest,
                                             @RequestBody ReviewDto reviewDto) {
        log.info("Add new review in rest " + titleRest);
        log.info("Review dto " + reviewDto);
        reviewService.addNewReview(titleRest, reviewDto);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    @GetMapping("/{titleRest}/reviews")
    public List<ReviewDto> getReviews(@PathVariable String titleRest) {
        log.info("Get review in rest " + titleRest);
        return reviewService.getListReviews(titleRest);
    }
}
