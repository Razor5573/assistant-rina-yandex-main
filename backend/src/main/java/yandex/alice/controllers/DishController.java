package yandex.alice.controllers;

import lombok.extern.slf4j.*;
import org.springframework.http.*;
import lombok.*;
import org.springframework.web.bind.annotation.*;
import yandex.alice.models.dto.DishDto;
import yandex.alice.models.dto.DishFindDto;
import yandex.alice.services.DishService;

import java.util.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = "/backend", produces = "application/json")
@RequiredArgsConstructor
@Slf4j
public class DishController {

    private final DishService dishService;

    @PostMapping("/{titleRest}/dish")
    public ResponseEntity<DishDto> dishDescription(@PathVariable String titleRest,
                                                   @RequestBody DishFindDto dishFindDto) {
        log.info("Title rest: " + titleRest + " dish description " + dishFindDto);
        return Optional.ofNullable(dishService.getDishDto(titleRest, dishFindDto))
                       .map(ResponseEntity::ok)
               .orElse(ResponseEntity.notFound().build());
    }
}