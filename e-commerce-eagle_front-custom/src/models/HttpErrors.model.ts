export class HTTPError extends Error {
  __proto__: HTTPError;
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.constructor = HTTPError;
    this.__proto__ = HTTPError.prototype;
    this.message = message;
    this.status = status;
  }

  toString() {
    return `HTTPError ${this.status}: ${this.message}`;
  }
}

export class HTTPNotFound extends HTTPError {
  constructor(message: string) {
    super(404, message);
    this.constructor = HTTPNotFound;
    this.__proto__ = HTTPNotFound.prototype;
  }
}
