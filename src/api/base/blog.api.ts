// application
import { IBlogCategory } from '~/interfaces/category';
import { IPost, MResponse } from '~/interfaces/post';

export interface IGetBlogCategoriesOptions {
    depth?: number;
}

export abstract class BlogApi {
    abstract getLatestPosts(limit: number): Promise<IPost[]>;

    abstract getCategories(options: IGetBlogCategoriesOptions): Promise<IBlogCategory[]>;
}
