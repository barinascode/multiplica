export class HttpError extends Error {
	constructor(public readonly message: string, public readonly options?: ErrorOptions) {
		super(message, options );
		Object.setPrototypeOf(this, HttpError.prototype);
	}
}

export default HttpError;