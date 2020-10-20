/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application
import { BlogApi, IGetBlogCategoriesOptions } from '~/api/base';
import { getBlogCategories, getLatestPosts } from '~/fake-server/endpoints';
import { IBlogCategory } from '~/interfaces/category';
import { IPost } from '~/interfaces/post';
import { blogBaseUrl } from '~/config';

import axios from 'axios';
import { baseUrl } from '~/services/utils';

export class FakeBlogApi extends BlogApi {
    getPostById(id: string | number): Promise<IPost> {
        const promise = axios.get(`${blogBaseUrl}/${id}`);
        const dataPromise = promise.then((response) => response.data);
        return dataPromise;
    }
    getLatestPosts(limit: number = -1): Promise<IPost[]> {
        let lastPartOfUrl: string = '';
        if (limit === -1) {
            lastPartOfUrl = '';
        } else {
            lastPartOfUrl = `?limit=${limit}`;
        }

        const promise = axios.get(`${blogBaseUrl}/posts/${lastPartOfUrl}`);
        const dataPromise = promise.then((response) => response.data.results);
        return dataPromise;
    }
    getAllPosts(page: number = 1): Promise<IPost[]> {
        let lastPartOfUrl: string = '';
        if (page === 1) {
            lastPartOfUrl = '';
        } else {
            lastPartOfUrl = `?page=${page}`;
        }

        const promise = axios.get(`${blogBaseUrl}/posts/${lastPartOfUrl}`);
        const dataPromise = promise.then((response) => response.data.results);
        return dataPromise;
    }

    getBlogPageCount(): Promise<any> {
        const promise = axios.get(`${blogBaseUrl}/posts/`);
        const dataPromise = promise.then((response) => response.data.count);

        return dataPromise;
    }

    getCategories(options: IGetBlogCategoriesOptions): Promise<IBlogCategory[]> {
        const promise = axios.get(`${blogBaseUrl}/categories/`);
        const dataPromise = promise.then((response) => response.data.results);
        return dataPromise;
    }
}
