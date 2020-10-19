// react
import React, { useState } from 'react';
// application
import BlogPageCategory from '~/components/blog/BlogPageCategory';
import { postsOnPage } from '~/config';

import { blogApi } from '~/api';
import { IPost } from '~/interfaces/post';

function Page(props: any) {
    const [page, setPage] = useState(1);

    return (
        <BlogPageCategory layout="classic" sidebarPosition="end" posts={props.posts} page={page} setPage={setPage} />
    );
}

export async function getStaticPaths() {
    const res = await blogApi.getBlogPageCount();
    const postsCount: number = res;
    const pagesCount: number = Math.ceil(postsCount / postsOnPage);

    let paths: any = [];
    for (let i = 1; i <= pagesCount; i++) {
        paths.push({ params: { page: `${i}` } });
    }

    return {
        paths: paths,
        fallback: false,
    };
}

export async function getStaticProps() {
    const res = await blogApi.getAllPosts(1);
    const posts: IPost[] = res;

    return {
        props: {
            posts,
        },
    };
}

export default Page;
