// react
import React from 'react';
// application
import BlogPagePost from '~/components/blog/BlogPagePost';
import Axios from 'axios';
import { IPost } from '../../../interfaces/post';

function Page(props: any) {
    console.log(props.post);
    return <BlogPagePost featuredImage sidebarPosition="end" post={props.post} />;
}

// This is not in use page but keep it for now adn delete later
export async function getStaticProps() {
    const res = await Axios.get('http://localhost:8000/blog/posts/1/');
    const post: IPost = res.data;

    return {
        props: {
            post,
        },
    };
}

export default Page;
