import { IDesktopHeaderVariant, IMobileHeaderVariant } from '~/store/options/optionsTypes';

interface IConfig {
    desktopHeaderVariant: IDesktopHeaderVariant;
    mobileHeaderVariant: IMobileHeaderVariant;
}

const config: IConfig = {
    // desktopHeaderVariant: 'spaceship/one',
    desktopHeaderVariant: 'classic/one',
    mobileHeaderVariant: 'one',
};

export default config;

// Urls for blog
export const blogBaseUrl: string = `http://localhost:8000/blog`;

// Urls for shop
export const productSingleSlug: string = `http://localhost:8000/api/product/red/singleproduct`;
// Categories
export const categoriesWithLevel = 'http://localhost:8000/testcategory/testcategories';
export const categoryBySlugUrl = 'http://localhost:8000/testcategory/testcategory';

export const productListUrl = 'http://localhost:8000/testcategory/testproducts/testproducts';

export const postsOnPage: number = 5; // Post on page settings also needs to be set on API endpoint on server

export const vehiclesUrl: string = 'http://localhost:8000/testcategory/testproducts/vehicles';
