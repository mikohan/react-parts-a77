// application
import { AbstractFilterBuilder } from '~/fake-server/filters/abstract-filter-builder';
import { CategoryFilterBuilder } from '~/fake-server/filters/category-filter-builder';
import { CheckFilterBuilder } from '~/fake-server/filters/check-filter-builder';
import { clone, delayResponse, error } from '~/fake-server/utils';
import { ColorFilterBuilder } from '~/fake-server/filters/color-filter-builder';

import { IFilterValues, IListOptions, IReviewsList } from '~/interfaces/list';
import { IProductsList, IProduct } from '~/interfaces/product';

import { products as dbProducts } from '~/fake-server/database/products';
import { RadioFilterBuilder } from '~/fake-server/filters/radio-filter-builder';
import { RangeFilterBuilder } from '~/fake-server/filters/range-filter-builder';
import { RatingFilterBuilder } from '~/fake-server/filters/rating-filter-builder';

import { VehicleFilterBuilder } from '~/fake-server/filters/vehicle-filter-builder';

import Axios from 'axios';
import { productListUrl } from '~/config';

export async function getProductsList(
    products: IProduct[],
    options: IListOptions = {},
    filterValues: IFilterValues = {}
): Promise<any> {
    // const promise = await Axios.get(`${productListUrl}/`);

    // let products = await promise.data; //dbProducts.slice(0);
    const filters: AbstractFilterBuilder[] = [
        new CategoryFilterBuilder('category', 'Categories'),
        new VehicleFilterBuilder('vehicle', 'Vehicle'),
        new RangeFilterBuilder('price', 'Цена'),
        new CheckFilterBuilder('brand', 'Brand', products),
        new RadioFilterBuilder('discount', 'Со Скидкой', products),
        new RatingFilterBuilder('rating', 'Rating', products),
        // new ColorFilterBuilder('color', 'Color'),
    ];

    filters.forEach((filter) => filter.makeItems(products, filterValues[filter.slug]));

    // Calculate items count for filter values.
    filters.forEach((filter) => filter.calc(filters));

    // Apply filters to products list.
    products = products.filter((product: IProduct) =>
        filters.reduce<boolean>((mr, filter) => mr && filter.test(product), true)
    );

    const page = options?.page || 1;
    const limit = options?.limit || 16;
    const sort = options?.sort || 'default';
    const total = products.length;
    const pages = Math.ceil(products.length / limit);
    const from = (page - 1) * limit + 1;
    const to = Math.min(page * limit, total);

    // Sort items array.
    products = products.sort((a: IProduct, b: IProduct) => {
        if (['name_asc', 'name_desc'].includes(sort)) {
            if (a.name === b.name) {
                return 0;
            }

            return (a.name > b.name ? 1 : -1) * (sort === 'name_asc' ? 1 : -1);
        }

        return 0;
    });

    const items = (products.slice(from - 1, to) as unknown) as Array<IProduct>;

    return delayResponse(
        Promise.resolve({
            items,
            page,
            limit,
            sort,
            total,
            pages,
            from,
            to,
            filters: filters.map((x) => x.build()),
        }),
        350
    );
}
