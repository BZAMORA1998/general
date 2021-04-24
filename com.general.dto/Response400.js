class Response400 {
    constructor(message,data) {
		this.code = 400;
		this.success = false;
		this.message = message;
		this.data = data;
	}
}

module.exports = Response400;