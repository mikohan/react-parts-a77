// react
import React from 'react';
// application
import BlogPageCategory from '~/components/blog/BlogPageCategory';
import Axios from 'axios';

import { IPost } from '~/interfaces/post';

function Page(props: any) {
    console.log(props);
    return <BlogPageCategory layout="classic" sidebarPosition="end" posts={props.posts} />;
}

export async function getStaticProps() {
    const res = await Axios.get('http://localhost:8000/blog/posts/');
    const posts: IPost[] = res.data.results;

    return {
        props: {
            posts,
        },
    };
}

export default Page;
