const assert = require('assert');

module.exports = class ApiError {
    constructor({status, body, code, headers = {}, reason}) {
        assert(status, 'status is required');
        assert(typeof body === 'object' && body !== null, 'body is required');
        this.status = status;
        this.body = body;
        this.code = code;
        this.headers = headers;
        this.reason = reason;
    }

    getStatus() {
        return this.status;
    }

    getHeaders() {
        return this.headers;
    }

    getType() {
        return 'application/json';
    }

    getBody() {
        return this.body;
    }

    getReason() {
        return this.reason;
    }

    static validation(message, reason) {
        const body = { message };
        return new ApiError({ status: 400, body, reason });
    }

    static notAuthorized(message = 'Not authorized') {
        const body = { message };
        return new ApiError({ status: 401, body });
    }

    static notFound(message, reason) {
        const body = { message };
        return new ApiError({ status: 404, body, reason });
    }

    static conflict(message, reason, resourceId) {
        const body = { message, resourceId };
        return new ApiError({ status: 409, body, reason });
    }

    static invalidConfig(message) {
        const body = { message };
        return new ApiError({ status: 400, body });
    }
};