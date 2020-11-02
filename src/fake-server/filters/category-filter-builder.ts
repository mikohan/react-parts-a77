/* eslint-disable import/prefer-default-export,class-methods-use-this */

// application
import { AbstractFilterBuilder } from '~/fake-server/filters/abstract-filter-builder';
import { ICategoryFilter } from '~/interfaces/filter';
import { IProduct } from '~/interfaces/product';
import { IShopCategory } from '~/interfaces/category';
import { prepareCategory } from '~/fake-server/endpoints/categories';
import { shopCategoriesList, shopCategoriesTree } from '~/fake-server/database/categories';
import Axios from 'axios';
import { ICategories } from '~/store/blog/blogActions';
import { myCataFlat, shopCategoryLst } from '~/fake-server/tests/catFilter';
import { shopApi } from '~/api';

export class CategoryFilterBuilder extends AbstractFilterBuilder {
    category: IShopCategory;
    constructor(slug: string, name: string, category: IShopCategory) {
        super(slug, name);
        this.category = category;
    }
    private value: string | null = null;

    private items: IShopCategory[] = [];

    test(): boolean {
        return true;
    }

    makeItems(products: IProduct[], value: string): void {
        this.value = value === undefined ? null : value;

        if (this.category) {
            this.items = [prepareCategory(this.category, 1)];
            // console.log(this.items);
        } else {
            // this.items = shopCategoriesTree.map((x) => prepareCategory(x));
            // console.log(shopCategoriesTree);
            // this.items = uniqueCats.map((x: any) => prepareCategory(x));
            // console.log(this.items);
        }
    }

    calc(): void {}

    build(): ICategoryFilter {
        return {
            type: 'category',
            slug: this.slug,
            name: this.name,
            items: this.items,
            value: this.value,
        };
    }
}
