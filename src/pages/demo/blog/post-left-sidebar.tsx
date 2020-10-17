// react
import React from 'react';
// application
import BlogPagePost from '~/components/blog/BlogPagePost';

function Page(props: any) {
    return <BlogPagePost featuredImage sidebarPosition="start" posts={props.posts} />;
}

export default Page;
