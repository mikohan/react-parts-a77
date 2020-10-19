// react
import React, { useState } from 'react';
// application
import BlogPageCategory from '~/components/blog/BlogPageCategory';

import { blogApi } from '~/api';
import { IPost } from '~/interfaces/post';
import { postsOnPage } from '~/config';

function Page(props: any) {
    console.log(props);
    const [page, setPage] = useState(1);
    const pagesCount: number = props.PagesCount;

    return (
        <BlogPageCategory
            layout="classic"
            sidebarPosition="end"
            posts={props.posts}
            page={page}
            setPage={setPage}
            pagesCount={pagesCount}
        />
    );
}

export async function getStaticProps({ page }: any) {
    const res = await blogApi.getAllPosts(page);
    const posts: IPost[] = res;

    const resCount = await blogApi.getBlogPageCount();
    const postsCount: number = resCount;
    const pagesCount: number = Math.ceil(postsCount / postsOnPage);

    return {
        props: {
            posts,
            pagesCount: pagesCount,
        },
    };
}

interface IPaths {
    paths: IPath[];
}
interface IPath {
    params: {
        page: string;
    };
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

export default Page;
