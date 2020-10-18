/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application
import { BlogApi, IGetBlogCategoriesOptions } from '~/api/base';
import { getBlogCategories, getLatestPosts } from '~/fake-server/endpoints';
import { IBlogCategory } from '~/interfaces/category';
import { IPost, MResponse } from '~/interfaces/post';

import axios from 'axios';

export class FakeBlogApi extends BlogApi {
    getLatestPosts(limit: number): Promise<IPost[]> {
        const promise = axios.get('http://localhost:8000/blog/posts/');
        const dataPromise = promise.then((response) => response.data.results);
        return dataPromise;
    }

    getCategories(options: IGetBlogCategoriesOptions): Promise<IBlogCategory[]> {
        return getBlogCategories(options);
    }
}
