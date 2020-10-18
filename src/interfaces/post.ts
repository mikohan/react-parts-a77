export interface IPost {
    id: number | string | null;
    title: string;
    image: string;
    categories: IBlogCategory[];
    date: string;
    slug: string;
    text: string;
    author: string;
}
export interface MResponse {
    count: number;
    next: null | number;
    results: IPost[];
}

export interface IBlogCategory {
    categroy: string | number;
}
