// react
import React from 'react';
// application
import BlogPagePost from '~/components/blog/BlogPagePost';
import Axios from 'axios';
import { MResponse, IPost } from '../../../interfaces/post';

function Page(props: any) {
    return <BlogPagePost featuredImage posts={props.posts} />;
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
