export interface IPost {
    id: number;
    title: string;
    image: string;
    categories: [];
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

// export interface IPost {
//     data: {
//         id: string;
//         title: string;
//         text: string;
//         image: string;
//         date: string;
//         slug: string;
//         categories: {
//             id: number;
//             name: string;
//             image: string;
//             slug: string;
//         };
//         parts_category: {
//             id: number;
//             name: string;
//             old_group_id: string;
//             slug: string;
//             plus: string;
//             minus: string;
//             full_plus: string;
//             full_minus: string;
//             lft: number;
//             rght: number;
//             three_id: number;
//             level: number;
//             parnet: number | null;
//             tags: [];
//         };
//     };
// }
