// react
import React from 'react';
// third-party
import { GetServerSideProps } from 'next';
// application
import ShopPageProduct from '~/components/shop/ShopPageProduct';
import { IProduct } from '~/interfaces/product';
import { shopApi } from '~/api';
import SitePageNotFound from '~/components/site/SitePageNotFound';
import axios from 'axios';

interface Props {
    product: IProduct | null;
    test: any;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
    const slug = typeof params?.slug === 'string' ? params?.slug : null;

    const res = async () => {
        const res = await axios.get('http://localhost:8000/api/product/red/singleproduct/second-product-hyundai/');
        return res.data;
    };

    return {
        props: {
            product: slug ? await shopApi.getProductBySlug(slug) : null,
            test: await res(),
        },
    };
};

function Page(props: Props) {
    const { product, test } = props;
    console.log(props.test);

    if (product === null) {
        return <SitePageNotFound />;
    }

    return <ShopPageProduct product={test} layout="full" />;
}

export default Page;
