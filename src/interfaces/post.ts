export interface IPost {
    id: number;
    title: string;
    image: string;
    categories: string[] | number[];
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
