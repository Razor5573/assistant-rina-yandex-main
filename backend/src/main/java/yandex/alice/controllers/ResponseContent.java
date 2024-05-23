package yandex.alice.controllers;

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
