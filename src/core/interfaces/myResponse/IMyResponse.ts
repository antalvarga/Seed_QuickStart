interface IMyResponse {
    status: number;
    message: string;
    value?: string;
}

interface IMyResponseData {
    status: number;
    message: string;
    value?: string;
    data?: Record<string, never>;
}

export { IMyResponse, IMyResponseData };
