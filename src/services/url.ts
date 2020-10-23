/* eslint-disable @typescript-eslint/no-unused-vars */

// application
import { IAddress } from '~/interfaces/address';
import { IAppLinkHref } from '~/components/shared/AppLink';
import { IBrand } from '~/interfaces/brand';
import { ICategory, IShopCategory } from '~/interfaces/category';
import { IOrder } from '~/interfaces/order';
import { IPost } from '~/interfaces/post';
import { IProduct } from '~/interfaces/product';

const url: { [key: string]: any } = {
    replace: (page: number) => '/',
    // common
    home: () => '/',
    category: (category: ICategory): IAppLinkHref => {
        if (category.type === 'shop') {
            return url.shopCategory(category);
        }

        return '/';
    },

    // shop pages
    shop: () => '/catalog',
    shopCategory: (category: IShopCategory): IAppLinkHref => ({
        href: `/catalog/[slug]${category.layout === 'products' ? '/products' : ''}?slug=${category.slug}`,
        as: `/catalog/${category.slug}${category.layout === 'products' ? '/products' : ''}`,
    }),
    products: ({ filters }: { filters?: Record<string, string> } = {}): IAppLinkHref => ({
        href: {
            pathname: '/catalog/products',
            query: {
                ...filters,
            },
        },
    }),
    product: (product: IProduct): IAppLinkHref => ({
        href: `/products/[slug]?slug=${product.slug}`,
        as: `/products/${product.slug}`,
    }),
    brand: (brand: IBrand) => '/',
    cart: () => '/cart',
    checkout: () => '/cart/checkout',
    checkoutSuccess: (order: IOrder): IAppLinkHref => ({
        href: `/cart/checkout/[token]?token=${order.token}`,
        as: `/cart/checkout/${order.token}`,
    }),
    wishlist: () => '/wishlist',
    compare: () => '/compare',
    trackOrder: () => '/track-order',

    // blog pages
    blog: () => '/demo/blog/classic-right-sidebar',
    blogPage: (page: string | number) => ({
        href: `/demo/blog/classic-right-sidebar/[page]?page=${page}`,
        as: `/demo/blog/classic-right-sidebar/${page}`,
    }),
    post: (post: IPost) => ({
        href: `/demo/blog/post-right-sidebar/[id]?id=${post.id}`,
        as: `/demo/blog/post-right-sidebar/${post.id}`,
    }),
    // post: (post: IPost) => `/demo/blog/post-right-sidebar/`,

    // auth pages
    signIn: () => '/account/login',
    signUp: () => '/',
    passwordRecovery: () => '/',

    // account pages
    accountDashboard: (): IAppLinkHref => '/account/dashboard',
    accountGarage: () => '/account/garage',
    accountProfile: () => '/account/profile',
    accountPassword: () => '/account/password',
    accountOrders: () => '/account/orders',
    accountOrderView: (order: Partial<IOrder>): IAppLinkHref => ({
        href: `/account/orders/[id]?id=${order.id}`,
        as: `/account/orders/${order.id}`,
    }),
    accountAddresses: () => '/account/addresses',
    accountAddressNew: (): IAppLinkHref => ({
        href: '/account/addresses/[id]?id=new',
        as: '/account/addresses/new',
    }),
    accountAddressEdit: (address: IAddress): IAppLinkHref => ({
        href: `/account/addresses/[id]?id=${address.id}`,
        as: `/account/addresses/${address.id}`,
    }),

    // site pages
    pageAboutUs: () => '/about-us',
    pageContactUs: () => '/contact-us',
    pageStoreLocation: () => '/',
    pageTerms: () => '/terms',
};

export default url;
