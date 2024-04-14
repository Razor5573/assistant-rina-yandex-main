package ru.nsu.sber_portal.ccfit.controllers;

import lombok.*;
import lombok.extern.slf4j.*;
import org.springframework.web.bind.annotation.*;
import ru.nsu.sber_portal.ccfit.models.dto.*;
import ru.nsu.sber_portal.ccfit.services.*;

@RestController
public class AliceController {

    @PostMapping("/alice")
    public ResponseObject resp(@RequestBody RequestObject request) {
        String text = request.getRequest().getCommand();
        String responseText = "Вы сказали " + text;
        ResponseObject response = new ResponseObject();
        response.setResponse(new ResponseContent(responseText, false));
        response.setVersion("1.0");
        return response;
    }
}