/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application
import { getBrands } from '~/fake-server/endpoints/brands';
import { IBrand } from '~/interfaces/brand';
import { IFilterValues, IListOptions, IReviewsList } from '~/interfaces/list';
import { IOrder } from '~/interfaces/order';
import { IProductsList, IProduct } from '~/interfaces/product';
import { IReview } from '~/interfaces/review';
import { IShopCategory } from '~/interfaces/category';
import axios from 'axios';
import {
    IAddProductReviewData,
    ICheckoutData,
    IGetBrandsOptions,
    IGetCategoriesOptions,
    IGetCategoryBySlugOptions,
    IGetSearchSuggestionsOptions,
    IGetSearchSuggestionsResult,
    ShopApi,
} from '~/api/base';
import {
    addProductReview,
    checkout,
    getCategories,
    getCategoryBySlug,
    getFeaturedProducts,
    getLatestProducts,
    getPopularProducts,
    getProductAnalogs,
    getProductReviews,
    // getProductsList,
    getRelatedProducts,
    getSearchSuggestions,
    getSpecialOffers,
    getTopRatedProducts,
} from '~/fake-server/endpoints';

import { getProductsListLoader } from './productListLoader';

import { productSingleSlug, categoriesWithLevel, categoryBySlugUrl, productListUrl } from '~/config';

export class FakeShopApi implements ShopApi {
    async getCategoryBySlug(slug: string, options?: IGetCategoryBySlugOptions): Promise<IShopCategory> {
        let url: string = '';
        if (options !== undefined && options!.hasOwnProperty('depth')) {
            url = `${categoryBySlugUrl}/${slug}/?depth=${options.depth}`;
        } else {
            url = `${categoryBySlugUrl}/${slug}/`;
        }
        const promise = await axios.get(url);
        return await promise.data;

        // return getCategoryBySlug(slug, options);
    }

    async getCategories(options?: IGetCategoriesOptions): Promise<IShopCategory[]> {
        let url: string = '';
        if (options !== undefined && options!.hasOwnProperty('depth')) {
            url = `${categoriesWithLevel}/?depth=${options.depth}`;
        } else {
            url = `${categoriesWithLevel}/`;
        }

        const promise = axios.get(url);
        const dataPromise = promise.then((res: any) => res.data);
        return dataPromise;
        // return getCategories(options);
    }

    getBrands(options?: IGetBrandsOptions): Promise<IBrand[]> {
        return getBrands(options);
    }

    // Starts function to return get shop list with filters

    // Stop function to return get shop list with filters

    async getProductsList(
        options: IListOptions = {},
        filters: IFilterValues = {},
        categorySlug: string
    ): Promise<IProductsList> {
        let url: string;
        if (categorySlug) {
            url = `${productListUrl}/?category=${categorySlug}`;
        } else {
            url = `${productListUrl}/`;
        }

        const promise = await axios.get(url);
        const products = await promise.data;
        return await getProductsListLoader(products, options, filters, categorySlug);
    }

    async getProductBySlug(slug: string): Promise<IProduct> {
        // return getProductBySlug(slug);

        // const url: string = `${productSingleSlug}/${slug}/`;
        // const promise = await axios.get(url);
        // return promise.data;

        const promise = await axios.get(`${productListUrl}/${slug}/`);
        return await promise.data.results;
    }

    getProductReviews(productId: number, options?: IListOptions): Promise<IReviewsList> {
        return getProductReviews(productId, options);
    }

    addProductReview(productId: number, data: IAddProductReviewData): Promise<IReview> {
        return addProductReview(productId, data);
    }

    getProductAnalogs(productId: number): Promise<IProduct[]> {
        return getProductAnalogs(productId);
    }

    getRelatedProducts(productId: number, limit: number): Promise<IProduct[]> {
        return getRelatedProducts(productId, limit);
    }

    getFeaturedProducts(categorySlug: string | null, limit: number): Promise<IProduct[]> {
        return getFeaturedProducts(categorySlug, limit);
    }

    getPopularProducts(categorySlug: string | null, limit: number): Promise<IProduct[]> {
        return getPopularProducts(categorySlug, limit);
    }

    getTopRatedProducts(categorySlug: string | null, limit: number): Promise<IProduct[]> {
        return getTopRatedProducts(categorySlug, limit);
    }

    getSpecialOffers(limit: number): Promise<IProduct[]> {
        return getSpecialOffers(limit);
    }

    getLatestProducts(limit: number): Promise<IProduct[]> {
        return getLatestProducts(limit);
    }

    getSearchSuggestions(query: string, options?: IGetSearchSuggestionsOptions): Promise<IGetSearchSuggestionsResult> {
        return getSearchSuggestions(query, options);
    }

    checkout(data: ICheckoutData): Promise<IOrder> {
        return checkout(data);
    }
}

const showConsole: any = (func: any, params: any) => {
    if (!params) {
        return func().then((res: any) => console.log(res), 'in bare function');
    }
    return func(params).then((res: any) => console.log(res, ` with slug:${params}`));
};

// showConsole(getCategoryBySlug, 'fuel-pumps');
const api = new FakeShopApi();

// showConsole(api.getCategories, null);
