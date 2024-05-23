package yandex.alice.models.mappers;

import lombok.extern.slf4j.Slf4j;
import org.jetbrains.annotations.*;
import yandex.alice.models.dto.CheckTableDto;
import yandex.alice.models.entity.CheckTable;


@Slf4j
public class CheckMapper {

    public static void setCheckTableDto(@NotNull CheckTable checkTable,
                                        @NotNull CheckTableDto checkTableDto) {

        checkTableDto.setCost(checkTable.getCost());
        checkTableDto.setNumberTable(checkTable.getNumberTable());
        checkTableDto.setRestId(checkTable.getRestaurant().getId());
    }

    @Contract("_ -> new")
    public static @NotNull CheckTableDto mapperToDto(@NotNull CheckTable checkTable){
        CheckTableDto checkTableDto = new CheckTableDto();
        setCheckTableDto(checkTable, checkTableDto);
        return checkTableDto;
    }

    public static void setCheckTableEntity(@NotNull CheckTable checkTable,
                                           @NotNull CheckTableDto checkTableDto) {
        checkTable.setNumberTable(checkTableDto.getNumberTable());
        checkTable.setCost(checkTableDto.getCost());
    }

    @Contract("_ -> new")
    public static @NotNull CheckTable mapperToEntity(@NotNull CheckTableDto checkTableDto){
        CheckTable checkTable = new CheckTable();
        setCheckTableEntity(checkTable, checkTableDto);
        return checkTable;
    }
}