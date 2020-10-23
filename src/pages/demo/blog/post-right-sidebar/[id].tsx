// react
import React from 'react';
// application
import BlogPagePost from '~/components/blog/BlogPagePost';

import { IPost } from '~/interfaces/post';
import { GetServerSideProps } from 'next';
import { blogApi } from '~/api';

interface Props {
    post: IPost;
    latestPosts: IPost[];
    setSearch(search: string): void;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
    const id = typeof params?.id === 'string' ? params?.id : 1;
    const post = await blogApi.getPostById(id);
    const latestPosts = await blogApi.getLatestPosts(4);

    return {
        props: {
            post: post,
            latestPosts: latestPosts,
        },
    };
};

function Page(props: Props) {
    const { post, latestPosts } = props;

    return <BlogPagePost featuredImage sidebarPosition="end" post={post} latestPosts={latestPosts} />;
}

export default Page;
