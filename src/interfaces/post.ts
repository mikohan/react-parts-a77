export interface IPost {
    id: number | string | null;
    title: string;
    image: string;
    categories: IBlogCategory[];
    partCategory: IBlogPartsCategory[];
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

export interface IBlogPartsCategory {
    partsCategory: {
        id: number;
        name: string;
    };
}

export interface IBlogCategory {
    categories: {
        id: number;
        name: string;
    };
}
