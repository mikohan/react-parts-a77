// react
import React, { useState } from 'react';
// application
import BlogPageCategory from '~/components/blog/BlogPageCategory';

import { blogApi } from '~/api';
import { IPost } from '~/interfaces/post';

function Page(props: any) {
    const [page, setPage] = useState(1);

    return (
        <BlogPageCategory
            layout="classic"
            sidebarPosition="end"
            posts={props.posts}
            page={page}
            setPage={setPage}
            pagesCount={props.pagesCount}
        />
    );
}

export async function getStaticProps() {
    const res = await blogApi.getLatestPosts(-1);
    const posts: IPost[] = res;

    return {
        props: {
            posts,
        },
    };
}

export default Page;
