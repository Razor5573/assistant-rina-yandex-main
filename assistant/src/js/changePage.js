function reply(body, response) {
    var replyData = {
        type: "raw",
        body: body
    };
    response.replies = response.replies || [];
    response.replies.push(replyData);
}

function addAction(action, context) {
    var command = {
        type: "smart_app_data",
        action: action
    };
    var response = {items: [{command: command}]};
    reply(response, context.response);
}

function changePage(page, context) {
    addAction({
        type: "open_page",
        page: page
    }, context);
}