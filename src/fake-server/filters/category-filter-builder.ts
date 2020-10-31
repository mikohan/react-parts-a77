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

export class CategoryFilterBuilder extends AbstractFilterBuilder {
    private value: string | null = null;

    private items: IShopCategory[] = [];

    async getCategoryList() {
        const promise = Axios.get('http://localhost:8000/testcategory/categorylist/dvigatel/');
        const result = (await promise).data;
        return result;
    }

    test(): boolean {
        return true;
    }

    makeItems(products: IProduct[], value: string): void {
        // console.log(products);
        const productCategories = products.map((product: any) => {
            return product.categories;
        });
        const productCats = productCategories.reduce((flat: any, toFlatten: any) => {
            return flat.concat(toFlatten);
        });

        const uniqueCats = productCats.filter(
            (thing: any, i: any, arr: any) => arr.findIndex((t: any) => t.id === thing.id) === i
        );

        this.value = value === undefined ? null : value;
        const categoryList: any = this.getCategoryList();
        categoryList.then((res: any) => {
            // const category = res; //.find((x: any) => x.slug === value);
        });
        const category = shopCategoriesList.find((x: any) => x.slug === value);

        if (category) {
            this.items = [prepareCategory(category, 1)];

            // console.log(this.items);
        } else {
            // this.items = shopCategoriesTree.map((x) => prepareCategory(x));

            this.items = uniqueCats;
            console.log(this.items);
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
