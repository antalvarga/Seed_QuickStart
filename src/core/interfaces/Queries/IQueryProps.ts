interface IQueryProps {
    page?: string;
    limit?: string;
    filter?: string;
}

interface IQuery {
    page: number;
    limit: number;
    filter: string;
}

export { IQuery, IQueryProps };
