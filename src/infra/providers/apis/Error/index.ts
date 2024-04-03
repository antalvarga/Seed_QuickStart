export class ApiError extends Error {
    public readonly statusCode: number;
    public readonly enviaEmail: number;

    constructor(message: string, statusCode: number, enviaEmail: number) {
        super(message);
        this.statusCode = statusCode;
        this.enviaEmail = enviaEmail;
    }
}
