package in.nirajkumar.MyMart.exception;
import java.lang.RuntimeException;
public class UsernameAlreadyExistsException extends RuntimeException {
    public UsernameAlreadyExistsException(String message) {
        super(message);
    }
}
