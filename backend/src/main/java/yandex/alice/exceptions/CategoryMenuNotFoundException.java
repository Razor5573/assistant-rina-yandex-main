package yandex.alice.exceptions;

public class CategoryMenuNotFoundException extends RuntimeException {
    public CategoryMenuNotFoundException(String message) {
        super(message);
    }
}
