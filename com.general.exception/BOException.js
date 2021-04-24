
class BOException extends Error {

    constructor(message) {
        super(message);
        this.name = 'Error';
        this.message=message;
    }
}

module.exports = BOException;