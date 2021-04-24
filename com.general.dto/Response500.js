class Response500 {
    constructor(message,data) {
		this.code = 500;
		this.success = false;
		this.message = message;
		this.data = data;
	}
}

module.exports = Response500;