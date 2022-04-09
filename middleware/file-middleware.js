const fileMiddleware = (request, response, next) => {
    let body;
    if (request.headers["content-type"]?.includes("multipart")) {
        const parsedRequest = JSON.parse(request.body.request)
        body = {
            ...parsedRequest,
            files: request.files
        };
    } else {
        body = request.body;
    }
    request.body = body;
    next();
}

module.exports = {
    fileMiddleware
}