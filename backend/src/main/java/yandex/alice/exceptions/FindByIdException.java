package yandex.alice.exceptions;

public class FindByIdException extends RuntimeException {
    public FindByIdException(String message) {
        super(message);
    }
}
