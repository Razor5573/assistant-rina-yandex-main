package yandex.alice.controllers;

import lombok.*;
import lombok.extern.slf4j.*;
import org.springframework.web.bind.annotation.*;
import yandex.alice.models.dto.CategoryDishesDto;
import yandex.alice.models.dto.DishFindDto;
import yandex.alice.services.CategoryMenuService;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/backend", produces = "application/json")
@Slf4j
@RequiredArgsConstructor
@RestController
public class CategoryMenuController {

    private final CategoryMenuService categoryMenuService;

    @PostMapping("/{titleRest}/category")
    public CategoryDishesDto viewDishByCategory(@PathVariable String titleRest,
                                                @RequestBody DishFindDto dishFindDto) {
        log.info("View dish by category,  dto : " + dishFindDto);
        return categoryMenuService.getListDishByCategory(titleRest, dishFindDto);
    }
}