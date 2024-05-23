package yandex.alice.exceptions;

import com.fasterxml.jackson.core.JsonProcessingException;

public class ParseJsonException extends JsonProcessingException {
    public ParseJsonException(String message) {
        super(message);
    }
}
