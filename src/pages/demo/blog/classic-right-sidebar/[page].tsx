// react
import React, { useState } from 'react';
// application
import BlogPageCategory from '~/components/blog/BlogPageCategory';

import { blogApi } from '~/api';
import { IPost } from '~/interfaces/post';

function Page(props: any) {
    const [page, setPage] = useState(1);

    return (
        <BlogPageCategory layout="classic" sidebarPosition="end" posts={props.posts} page={page} setPage={setPage} />
    );
}

export async function getStaticProps({ page }: any) {
    const res = await blogApi.getAllPosts(page);
    const posts: IPost[] = res;

    return {
        props: {
            posts,
        },
    };
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { page: '1' } }, { params: { page: '2' } }, { params: { page: '3' } }],
        fallback: false, // See the "fallback" section below
    };
}

export default Page;
