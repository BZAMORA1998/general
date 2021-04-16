class Response200 {
    constructor(message,data) {
		this.code = 200;
		this.success = true;
		this.message = message;
		this.data = data;
	}
}

module.exports = Response200;