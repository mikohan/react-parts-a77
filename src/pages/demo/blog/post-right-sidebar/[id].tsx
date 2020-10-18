// react
import React from 'react';
// application
import BlogPagePost from '~/components/blog/BlogPagePost';

import { IPost } from '~/interfaces/post';
import { GetServerSideProps } from 'next';
import { blogApi } from '~/api';

interface Props {
    post: IPost | null;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
    const id = typeof params?.id === 'string' ? params?.id : null;
    const post = await blogApi.getPostById(id);

    return {
        props: {
            post: id ? post : null,
        },
    };
};

function Page(props: Props) {
    const { post } = props;

    return <BlogPagePost featuredImage sidebarPosition="end" post={post} />;
}

export default Page;
