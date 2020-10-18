// react
import React from 'react';
// application
import BlogPagePost from '~/components/blog/BlogPagePost';

function Page(props: any) {
    return <BlogPagePost featuredImage post={props.post} />;
}

export default Page;
