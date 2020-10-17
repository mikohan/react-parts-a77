/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application
import { BlogApi, IGetBlogCategoriesOptions } from '~/api/base';
import { getBlogCategories, getLatestPosts } from '~/fake-server/endpoints';
import { IBlogCategory } from '~/interfaces/category';
import { IPost, MResponse } from '~/interfaces/post';

import axios from 'axios';

export interface ServerData {
    id: string;
    title: string;
    text: string;
    image: string;
    date: string;
    slug: string;
    categories: {
        id: number;
        name: string;
        image: string;
        slug: string;
    };
    parts_category: {
        id: number;
        name: string;
        old_group_id: string;
        slug: string;
        plus: string;
        minus: string;
        full_plus: string;
        full_minus: string;
        lft: number;
        rght: number;
        three_id: number;
        level: number;
        parnet: number | null;
        tags: [];
    };
}

interface ServerResponse {
    data: ServerData;
}

export class FakeBlogApi extends BlogApi {
    getLatestPosts(limit: number): Promise<MResponse[]> {
        // console.log(getLatestPosts(limit));
        // const prom = getLatestPosts(limit);
        // return await prom;

        return axios.get('http://localhost:8000/blog/posts/');
    }

    getCategories(options: IGetBlogCategoriesOptions): Promise<IBlogCategory[]> {
        return getBlogCategories(options);
    }
}
