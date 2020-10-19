// react
import React, { useState } from 'react';
// application
import BlogPageCategory from '~/components/blog/BlogPageCategory';

import { blogApi } from '~/api';
import { IPost } from '~/interfaces/post';

function Page(props: any) {
    const [page, setPage] = useState(1);

    console.log('Console log page - ', page);
    return (
        <BlogPageCategory layout="classic" sidebarPosition="end" posts={props.posts} page={page} setPage={setPage} />
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
