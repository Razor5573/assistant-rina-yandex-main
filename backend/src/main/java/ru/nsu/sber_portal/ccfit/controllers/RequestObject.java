public class RequestObject {
    private RequestContent request;

    public RequestContent getRequest() {
        return request;
    }

    public void setRequest(RequestContent request) {
        this.request = request;
    }
}

public class RequestContent {
    private String command;

    public String getCommand() {
        return command;
    }

    public void setCommand(String command) {
        this.command = command;
    }
}

public class ResponseObject {
    private ResponseContent response;
    private String version;

    public ResponseContent getResponse() {
        return response;
    }

    public void setResponse(ResponseContent response) {
        this.response = response;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }
}

public class ResponseContent {
    private String text;
    private boolean endSession;

    public ResponseContent(String text, boolean endSession) {
        this.text = text;
        this.endSession = endSession;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public boolean isEndSession() {
        return endSession;
    }

    public void setEndSession(boolean endSession) {
        this.endSession = endSession;
    }
}

