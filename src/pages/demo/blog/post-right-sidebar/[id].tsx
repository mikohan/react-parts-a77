// react
import React from 'react';
// application
import BlogPagePost from '~/components/blog/BlogPagePost';
import Axios from 'axios';
import { IPost } from '~/interfaces/post';
import { GetServerSideProps } from 'next';

interface Props {
    post: IPost | null;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
    const id = typeof params?.id === 'string' ? params?.id : null;
    console.log(params?.id, 'In parpams id string');
    const res = await Axios.get(`http://localhost:8000/blog/posts/${params?.id}/`);
    const post: IPost = res.data;

    return {
        props: {
            post: id ? post : null,
        },
    };
};

function Page(props: Props) {
    const { post } = props;
    console.log(post);

    // return <h1>hsshsh</h1>;
    return <BlogPagePost featuredImage sidebarPosition="end" post={props.post} />;
}

// export async function getStaticPaths() {
//     return {
//         paths: [{ params: { id: '*', slug: '*' } }],
//         fallback: true,
//     };
// }

// export async function getStaticProps() {
//     const res = await Axios.get('http://localhost:8000/blog/posts/1/');
//     const post: IPost = res.data;

//     return {
//         props: {
//             post,
//         },
//     };
// }

export default Page;
