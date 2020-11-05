// application
import { ICategoryDef } from '~/fake-server/interfaces/category-def';
import { makeIdGenerator } from '~/fake-server/utils';
import { IBaseCategory, IBlogCategory, ICategory, IShopCategory } from '~/interfaces/category';
import { categoriesData, dataRecursive } from './new_categores';
import { categoriesWithLevel } from '~/config';
import axios from 'axios';

const getNextId = makeIdGenerator();

// function makeShopCategory(def: ICategoryDef, parent: IShopCategory | null): IShopCategory {
//     return {
//         id: getNextId(),
//         type: 'shop',
//         name: def.name,
//         slug: def.slug,
//         image: def.image || null,
//         items: def.items,
//         parent,
//         children: [],
//         layout: def.layout ? def.layout : 'products',
//         customFields: {},
//     };
// }

function makeBlogCategory(def: ICategoryDef, parent: IBlogCategory | null): IBlogCategory {
    return {
        id: getNextId(),
        type: 'blog',
        name: def.name,
        slug: def.slug,
        image: def.image || null,
        items: def.items,
        parent,
        children: [],
        customFields: {},
    };
}

function makeCategories<T extends IBaseCategory>(
    makeFn: (def: ICategoryDef, parent: T | null) => T,
    defs: ICategoryDef[],
    parent: T | null = null
): T[] {
    const categories: T[] = [];

    defs.forEach((def) => {
        const category: T = makeFn(def, parent);

        if (def.children) {
            category.children = makeCategories(makeFn, def.children, category);
        }

        categories.push(category);
    });

    return categories;
}

export async function makeCategoriesFromApi<T extends IBaseCategory>(): Promise<IShopCategory> {
    const res = async () => {
        const promise = await axios.get(`${categoriesWithLevel}/`);

        return promise.data;
    };

    const cats = await res();
    // filtering empty categories here
    const filtredArray = cats.filter((item: any) => {
        return item.count !== 0;
    });

    const list: any = filtredArray;

    const tree: any = [];
    const lookup: any = {};

    list.forEach((o: any) => {
        lookup[o.id] = o;
        lookup[o.id].children = [];
    });

    list.forEach((o: any) => {
        if (o.parent !== null) {
            lookup[o.parent.id].children.push(o);
        } else {
            tree.push(o);
        }
    });

    return tree;
}

export function flatTree<T extends ICategory>(categories: T[]): T[] {
    let result: T[] = [];

    categories.forEach((category) => {
        result = [...result, category, ...flatTree(category.children as T[])];
    });

    return result;
}

const blogCategoriesDef: ICategoryDef[] = [
    {
        name: 'Latest News',
        slug: 'latest-news',
    },
    {
        name: 'Special Offers',
        slug: 'special-offers',
        children: [
            {
                name: 'Spring Sales',
                slug: 'spring-sales',
            },
            {
                name: 'Summer Sales',
                slug: 'summer-sales',
            },
            {
                name: 'Autumn Sales',
                slug: 'autumn-sales',
            },
            {
                name: 'Christmas Sales',
                slug: 'christmas-sales',
            },
            {
                name: 'Other Sales',
                slug: 'other-sales',
            },
        ],
    },
    {
        name: 'New Arrivals',
        slug: 'new-arrivals',
    },
    {
        name: 'Reviews',
        slug: 'reviews',
    },
    {
        name: 'Wheels & Tires',
        slug: 'wheels-tires',
    },
    {
        name: 'Engine & Drivetrain',
        slug: 'engine-drivetrain',
    },
    {
        name: 'Transmission',
        slug: 'transmission',
    },
    {
        name: 'Performance',
        slug: 'performance',
    },
];

// export const shopCategoriesTree: IShopCategory[] = makeCategories(makeShopCategory, shopCategoriesDef);

// export const shopCategoriesTree: IShopCategory[] = makeCategoriesFromApi();

// export const shopCategoriesList: IShopCategory[] = flatTree(shopCategoriesTree);
export const shopCategoriesList: IShopCategory[] = categoriesData;

export const blogCategoriesTree: IBlogCategory[] = makeCategories(makeBlogCategory, blogCategoriesDef);

export const blogCategoriesList: IBlogCategory[] = flatTree(blogCategoriesTree);
