import { IShopCategory } from '~/interfaces/category';

export const categoriesData: any = [
    {
        id: 1,
        count: 2,
        type: 'shop',
        name: 'Трансмиссия',
        slug: 'transmissija',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: null,
        children: [],
    },
    {
        id: 2,
        count: 13,
        type: 'shop',
        name: 'Двигатель',
        slug: 'dvigatel',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: null,
        children: [6, 7, 29, 30, 31, 32, 33, 34, 35],
    },
    {
        id: 6,
        count: 5,
        type: 'shop',
        name: 'Головка',
        slug: 'fuel-system',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 2,
        children: [27, 28],
    },
    {
        id: 27,
        count: 4,
        type: 'shop',
        name: 'Распредвал',
        slug: 'raspredval',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 6,
        children: [],
    },
    {
        id: 28,
        count: 1,
        type: 'shop',
        name: 'Головка в сборе',
        slug: 'golovka-v-sbore',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 6,
        children: [],
    },
    {
        id: 7,
        count: 5,
        type: 'shop',
        name: 'Поршневая',
        slug: 'porshnevaja',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 2,
        children: [8, 9],
    },
    {
        id: 8,
        count: 2,
        type: 'shop',
        name: 'Коленвал',
        slug: 'kolenval',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 7,
        children: [],
    },
    {
        id: 9,
        count: 3,
        type: 'shop',
        name: 'Поршни',
        slug: 'porshni',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 7,
        children: [10],
    },
    {
        id: 10,
        count: 2,
        type: 'shop',
        name: 'Кольца поршневые',
        slug: 'koltsa-porshnevye',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 9,
        children: [],
    },
    {
        id: 29,
        count: 1,
        type: 'shop',
        name: 'Масляный насос',
        slug: 'masljanyj-nasos',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 2,
        children: [],
    },
    {
        id: 30,
        count: 0,
        type: 'shop',
        name: 'Генератор',
        slug: 'generator',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 2,
        children: [36],
    },
    {
        id: 36,
        count: 0,
        type: 'shop',
        name: 'Электеика Герератора',
        slug: 'elekteika-gereratora',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 30,
        children: [37],
    },
    {
        id: 37,
        count: 0,
        type: 'shop',
        name: 'Проводка',
        slug: 'provodka',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 36,
        children: [],
    },
    {
        id: 31,
        count: 2,
        type: 'shop',
        name: 'Радиатор',
        slug: 'radiator',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 2,
        children: [],
    },
    {
        id: 32,
        count: 0,
        type: 'shop',
        name: 'Вискомуфта',
        slug: 'viskomufta',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 2,
        children: [],
    },
    {
        id: 33,
        count: 0,
        type: 'shop',
        name: 'Поддон',
        slug: 'poddon',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 2,
        children: [],
    },
    {
        id: 34,
        count: 0,
        type: 'shop',
        name: 'Блок цилиндров',
        slug: 'blok-tsilindrov',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 2,
        children: [],
    },
    {
        id: 35,
        count: 0,
        type: 'shop',
        name: 'Крышка клапанов',
        slug: 'kryshka-klapanov',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 2,
        children: [],
    },
    {
        id: 3,
        count: 0,
        type: 'shop',
        name: 'Кузов',
        slug: 'kuzov',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: null,
        children: [15, 16, 17],
    },
    {
        id: 15,
        count: 0,
        type: 'shop',
        name: 'Капот',
        slug: 'kapot',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 3,
        children: [],
    },
    {
        id: 16,
        count: 0,
        type: 'shop',
        name: 'Крылья',
        slug: 'krylja',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 3,
        children: [],
    },
    {
        id: 17,
        count: 0,
        type: 'shop',
        name: 'Бампреры',
        slug: 'bamprery',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 3,
        children: [18, 19],
    },
    {
        id: 18,
        count: 0,
        type: 'shop',
        name: 'Бампер передний',
        slug: 'bamper-perednij',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 17,
        children: [],
    },
    {
        id: 19,
        count: 0,
        type: 'shop',
        name: 'Бампер Задний',
        slug: 'bamper-zadnij',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 17,
        children: [],
    },
    {
        id: 4,
        count: 5,
        type: 'shop',
        name: 'Автохимия',
        slug: 'avtohimija',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: null,
        children: [20],
    },
    {
        id: 20,
        count: 5,
        type: 'shop',
        name: 'Масло',
        slug: 'maslo',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 4,
        children: [21, 22],
    },
    {
        id: 21,
        count: 1,
        type: 'shop',
        name: 'Масло Двигателя',
        slug: 'maslo-dvigatelja',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 20,
        children: [],
    },
    {
        id: 22,
        count: 4,
        type: 'shop',
        name: 'Масло Трансмиссионное',
        slug: 'maslo-transmissionnoe',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 20,
        children: [23, 24],
    },
    {
        id: 23,
        count: 4,
        type: 'shop',
        name: 'Масло в Коробку',
        slug: 'maslo-v-korobku',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 22,
        children: [25, 26],
    },
    {
        id: 25,
        count: 2,
        type: 'shop',
        name: 'Масло в Коробку Автомат',
        slug: 'maslo-v-korobku-avtomat',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 23,
        children: [],
    },
    {
        id: 26,
        count: 2,
        type: 'shop',
        name: 'Масло в Коробку Механика',
        slug: 'maslo-v-korobku-mehanika',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 23,
        children: [],
    },
    {
        id: 24,
        count: 0,
        type: 'shop',
        name: 'Масло в Редуктор',
        slug: 'maslo-v-reduktor',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 22,
        children: [],
    },
    {
        id: 5,
        count: 1,
        type: 'shop',
        name: 'Инструменты',
        slug: 'instrumenty',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: null,
        children: [11, 13],
    },
    {
        id: 11,
        count: 0,
        type: 'shop',
        name: 'Ключи Гаечные',
        slug: 'kljuchi-gaechnye',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 5,
        children: [12],
    },
    {
        id: 12,
        count: 0,
        type: 'shop',
        name: 'Ключи рожковые',
        slug: 'kljuchi-rozhkovye',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 11,
        children: [],
    },
    {
        id: 13,
        count: 1,
        type: 'shop',
        name: 'Наборы инструментов',
        slug: 'nabory-instrumentov',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 5,
        children: [14],
    },
    {
        id: 14,
        count: 0,
        type: 'shop',
        name: 'Наборы отверток',
        slug: 'nabory-otvertok',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: 13,
        children: [],
    },
];

export const dataRecursive: any = [
    {
        id: 1,
        count: 2,
        type: 'shop',
        name: 'Трансмиссия',
        slug: 'transmissija',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: null,
    },
    {
        id: 2,
        count: 14,
        type: 'shop',
        name: 'Двигатель',
        slug: 'dvigatel',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: null,
        children: [
            {
                id: 6,
                count: 5,
                type: 'shop',
                name: 'Головка',
                slug: 'fuel-system',
                image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                layout: 'products',
                parent: {
                    id: 2,
                    count: 14,
                    type: 'shop',
                    name: 'Двигатель',
                    slug: 'dvigatel',
                    image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                    layout: 'products',
                    parent: null,
                },
                children: [
                    {
                        id: 27,
                        count: 4,
                        type: 'shop',
                        name: 'Распредвал',
                        slug: 'raspredval',
                        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                        layout: 'products',
                        parent: {
                            id: 6,
                            count: 5,
                            type: 'shop',
                            name: 'Головка',
                            slug: 'fuel-system',
                            image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                            layout: 'products',
                            parent: 2,
                        },
                    },
                    {
                        id: 28,
                        count: 1,
                        type: 'shop',
                        name: 'Головка в сборе',
                        slug: 'golovka-v-sbore',
                        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                        layout: 'products',
                        parent: {
                            id: 6,
                            count: 5,
                            type: 'shop',
                            name: 'Головка',
                            slug: 'fuel-system',
                            image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                            layout: 'products',
                            parent: 2,
                        },
                    },
                ],
            },
            {
                id: 7,
                count: 5,
                type: 'shop',
                name: 'Поршневая',
                slug: 'porshnevaja',
                image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                layout: 'products',
                parent: {
                    id: 2,
                    count: 14,
                    type: 'shop',
                    name: 'Двигатель',
                    slug: 'dvigatel',
                    image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                    layout: 'products',
                    parent: null,
                },
                children: [
                    {
                        id: 8,
                        count: 2,
                        type: 'shop',
                        name: 'Коленвал',
                        slug: 'kolenval',
                        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                        layout: 'products',
                        parent: {
                            id: 7,
                            count: 5,
                            type: 'shop',
                            name: 'Поршневая',
                            slug: 'porshnevaja',
                            image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                            layout: 'products',
                            parent: 2,
                        },
                    },
                    {
                        id: 9,
                        count: 3,
                        type: 'shop',
                        name: 'Поршни',
                        slug: 'porshni',
                        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                        layout: 'products',
                        parent: {
                            id: 7,
                            count: 5,
                            type: 'shop',
                            name: 'Поршневая',
                            slug: 'porshnevaja',
                            image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                            layout: 'products',
                            parent: 2,
                        },
                        children: [
                            {
                                id: 10,
                                count: 2,
                                type: 'shop',
                                name: 'Кольца поршневые',
                                slug: 'koltsa-porshnevye',
                                image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                                layout: 'products',
                                parent: {
                                    id: 9,
                                    count: 3,
                                    type: 'shop',
                                    name: 'Поршни',
                                    slug: 'porshni',
                                    image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                                    layout: 'products',
                                    parent: 7,
                                },
                            },
                        ],
                    },
                ],
            },
            {
                id: 29,
                count: 1,
                type: 'shop',
                name: 'Масляный насос',
                slug: 'masljanyj-nasos',
                image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                layout: 'products',
                parent: {
                    id: 2,
                    count: 14,
                    type: 'shop',
                    name: 'Двигатель',
                    slug: 'dvigatel',
                    image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                    layout: 'products',
                    parent: null,
                },
            },
            {
                id: 30,
                count: 1,
                type: 'shop',
                name: 'Генератор',
                slug: 'generator',
                image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                layout: 'products',
                parent: {
                    id: 2,
                    count: 14,
                    type: 'shop',
                    name: 'Двигатель',
                    slug: 'dvigatel',
                    image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                    layout: 'products',
                    parent: null,
                },
                children: [
                    {
                        id: 36,
                        count: 0,
                        type: 'shop',
                        name: 'Электеика Герератора',
                        slug: 'elekteika-gereratora',
                        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                        layout: 'products',
                        parent: {
                            id: 30,
                            count: 1,
                            type: 'shop',
                            name: 'Генератор',
                            slug: 'generator',
                            image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                            layout: 'products',
                            parent: 2,
                        },
                        children: [
                            {
                                id: 37,
                                count: 0,
                                type: 'shop',
                                name: 'Проводка',
                                slug: 'provodka',
                                image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                                layout: 'products',
                                parent: {
                                    id: 36,
                                    count: 0,
                                    type: 'shop',
                                    name: 'Электеика Герератора',
                                    slug: 'elekteika-gereratora',
                                    image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                                    layout: 'products',
                                    parent: 30,
                                },
                            },
                        ],
                    },
                ],
            },
            {
                id: 31,
                count: 2,
                type: 'shop',
                name: 'Радиатор',
                slug: 'radiator',
                image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                layout: 'products',
                parent: {
                    id: 2,
                    count: 14,
                    type: 'shop',
                    name: 'Двигатель',
                    slug: 'dvigatel',
                    image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                    layout: 'products',
                    parent: null,
                },
            },
            {
                id: 32,
                count: 0,
                type: 'shop',
                name: 'Вискомуфта',
                slug: 'viskomufta',
                image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                layout: 'products',
                parent: {
                    id: 2,
                    count: 14,
                    type: 'shop',
                    name: 'Двигатель',
                    slug: 'dvigatel',
                    image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                    layout: 'products',
                    parent: null,
                },
            },
            {
                id: 33,
                count: 0,
                type: 'shop',
                name: 'Поддон',
                slug: 'poddon',
                image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                layout: 'products',
                parent: {
                    id: 2,
                    count: 14,
                    type: 'shop',
                    name: 'Двигатель',
                    slug: 'dvigatel',
                    image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                    layout: 'products',
                    parent: null,
                },
            },
            {
                id: 34,
                count: 0,
                type: 'shop',
                name: 'Блок цилиндров',
                slug: 'blok-tsilindrov',
                image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                layout: 'products',
                parent: {
                    id: 2,
                    count: 14,
                    type: 'shop',
                    name: 'Двигатель',
                    slug: 'dvigatel',
                    image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                    layout: 'products',
                    parent: null,
                },
            },
            {
                id: 35,
                count: 0,
                type: 'shop',
                name: 'Крышка клапанов',
                slug: 'kryshka-klapanov',
                image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                layout: 'products',
                parent: {
                    id: 2,
                    count: 14,
                    type: 'shop',
                    name: 'Двигатель',
                    slug: 'dvigatel',
                    image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                    layout: 'products',
                    parent: null,
                },
            },
            {
                id: 38,
                count: 0,
                type: 'shop',
                name: 'Крепление двигателя',
                slug: 'kreplenie-dvigatelja',
                image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                layout: 'products',
                parent: {
                    id: 2,
                    count: 14,
                    type: 'shop',
                    name: 'Двигатель',
                    slug: 'dvigatel',
                    image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                    layout: 'products',
                    parent: null,
                },
            },
        ],
    },
    {
        id: 3,
        count: 0,
        type: 'shop',
        name: 'Кузов',
        slug: 'kuzov',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: null,
        children: [
            {
                id: 15,
                count: 0,
                type: 'shop',
                name: 'Капот',
                slug: 'kapot',
                image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                layout: 'products',
                parent: {
                    id: 3,
                    count: 0,
                    type: 'shop',
                    name: 'Кузов',
                    slug: 'kuzov',
                    image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                    layout: 'products',
                    parent: null,
                },
            },
            {
                id: 16,
                count: 0,
                type: 'shop',
                name: 'Крылья',
                slug: 'krylja',
                image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                layout: 'products',
                parent: {
                    id: 3,
                    count: 0,
                    type: 'shop',
                    name: 'Кузов',
                    slug: 'kuzov',
                    image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                    layout: 'products',
                    parent: null,
                },
            },
            {
                id: 17,
                count: 0,
                type: 'shop',
                name: 'Бампреры',
                slug: 'bamprery',
                image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                layout: 'products',
                parent: {
                    id: 3,
                    count: 0,
                    type: 'shop',
                    name: 'Кузов',
                    slug: 'kuzov',
                    image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                    layout: 'products',
                    parent: null,
                },
                children: [
                    {
                        id: 18,
                        count: 0,
                        type: 'shop',
                        name: 'Бампер передний',
                        slug: 'bamper-perednij',
                        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                        layout: 'products',
                        parent: {
                            id: 17,
                            count: 0,
                            type: 'shop',
                            name: 'Бампреры',
                            slug: 'bamprery',
                            image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                            layout: 'products',
                            parent: 3,
                        },
                    },
                    {
                        id: 19,
                        count: 0,
                        type: 'shop',
                        name: 'Бампер Задний',
                        slug: 'bamper-zadnij',
                        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                        layout: 'products',
                        parent: {
                            id: 17,
                            count: 0,
                            type: 'shop',
                            name: 'Бампреры',
                            slug: 'bamprery',
                            image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                            layout: 'products',
                            parent: 3,
                        },
                    },
                ],
            },
        ],
    },
    {
        id: 4,
        count: 5,
        type: 'shop',
        name: 'Автохимия',
        slug: 'avtohimija',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: null,
        children: [
            {
                id: 20,
                count: 5,
                type: 'shop',
                name: 'Масло',
                slug: 'maslo',
                image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                layout: 'products',
                parent: {
                    id: 4,
                    count: 5,
                    type: 'shop',
                    name: 'Автохимия',
                    slug: 'avtohimija',
                    image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                    layout: 'products',
                    parent: null,
                },
                children: [
                    {
                        id: 21,
                        count: 1,
                        type: 'shop',
                        name: 'Масло Двигателя',
                        slug: 'maslo-dvigatelja',
                        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                        layout: 'products',
                        parent: {
                            id: 20,
                            count: 5,
                            type: 'shop',
                            name: 'Масло',
                            slug: 'maslo',
                            image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                            layout: 'products',
                            parent: 4,
                        },
                    },
                    {
                        id: 22,
                        count: 4,
                        type: 'shop',
                        name: 'Масло Трансмиссионное',
                        slug: 'maslo-transmissionnoe',
                        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                        layout: 'products',
                        parent: {
                            id: 20,
                            count: 5,
                            type: 'shop',
                            name: 'Масло',
                            slug: 'maslo',
                            image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                            layout: 'products',
                            parent: 4,
                        },
                        children: [
                            {
                                id: 23,
                                count: 4,
                                type: 'shop',
                                name: 'Масло в Коробку',
                                slug: 'maslo-v-korobku',
                                image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                                layout: 'products',
                                parent: {
                                    id: 22,
                                    count: 4,
                                    type: 'shop',
                                    name: 'Масло Трансмиссионное',
                                    slug: 'maslo-transmissionnoe',
                                    image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                                    layout: 'products',
                                    parent: 20,
                                },
                                children: [
                                    {
                                        id: 25,
                                        count: 2,
                                        type: 'shop',
                                        name: 'Масло в Коробку Автомат',
                                        slug: 'maslo-v-korobku-avtomat',
                                        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                                        layout: 'products',
                                        parent: {
                                            id: 23,
                                            count: 4,
                                            type: 'shop',
                                            name: 'Масло в Коробку',
                                            slug: 'maslo-v-korobku',
                                            image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                                            layout: 'products',
                                            parent: 22,
                                        },
                                    },
                                    {
                                        id: 26,
                                        count: 2,
                                        type: 'shop',
                                        name: 'Масло в Коробку Механика',
                                        slug: 'maslo-v-korobku-mehanika',
                                        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                                        layout: 'products',
                                        parent: {
                                            id: 23,
                                            count: 4,
                                            type: 'shop',
                                            name: 'Масло в Коробку',
                                            slug: 'maslo-v-korobku',
                                            image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                                            layout: 'products',
                                            parent: 22,
                                        },
                                    },
                                ],
                            },
                            {
                                id: 24,
                                count: 0,
                                type: 'shop',
                                name: 'Масло в Редуктор',
                                slug: 'maslo-v-reduktor',
                                image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                                layout: 'products',
                                parent: {
                                    id: 22,
                                    count: 4,
                                    type: 'shop',
                                    name: 'Масло Трансмиссионное',
                                    slug: 'maslo-transmissionnoe',
                                    image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                                    layout: 'products',
                                    parent: 20,
                                },
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 5,
        count: 1,
        type: 'shop',
        name: 'Инструменты',
        slug: 'instrumenty',
        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
        layout: 'products',
        parent: null,
        children: [
            {
                id: 11,
                count: 0,
                type: 'shop',
                name: 'Ключи Гаечные',
                slug: 'kljuchi-gaechnye',
                image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                layout: 'products',
                parent: {
                    id: 5,
                    count: 1,
                    type: 'shop',
                    name: 'Инструменты',
                    slug: 'instrumenty',
                    image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                    layout: 'products',
                    parent: null,
                },
                children: [
                    {
                        id: 12,
                        count: 0,
                        type: 'shop',
                        name: 'Ключи рожковые',
                        slug: 'kljuchi-rozhkovye',
                        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                        layout: 'products',
                        parent: {
                            id: 11,
                            count: 0,
                            type: 'shop',
                            name: 'Ключи Гаечные',
                            slug: 'kljuchi-gaechnye',
                            image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                            layout: 'products',
                            parent: 5,
                        },
                    },
                ],
            },
            {
                id: 13,
                count: 1,
                type: 'shop',
                name: 'Наборы инструментов',
                slug: 'nabory-instrumentov',
                image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                layout: 'products',
                parent: {
                    id: 5,
                    count: 1,
                    type: 'shop',
                    name: 'Инструменты',
                    slug: 'instrumenty',
                    image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                    layout: 'products',
                    parent: null,
                },
                children: [
                    {
                        id: 14,
                        count: 0,
                        type: 'shop',
                        name: 'Наборы отверток',
                        slug: 'nabory-otvertok',
                        image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                        layout: 'products',
                        parent: {
                            id: 13,
                            count: 1,
                            type: 'shop',
                            name: 'Наборы инструментов',
                            slug: 'nabory-instrumentov',
                            image: 'http://localhost:8000/media/123/555_tf/IMG_4210.jpg',
                            layout: 'products',
                            parent: 5,
                        },
                    },
                ],
            },
        ],
    },
];
