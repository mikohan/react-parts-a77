// react
import React, { useEffect, useState } from 'react';
// application
import BlogPageCategory from '~/components/blog/BlogPageCategory';

import { blogApi } from '~/api';
import { IPost } from '~/interfaces/post';
import { postsOnPage } from '~/config';
import { useRouter } from 'next/router';

function Page(props: any) {
    const [page, setPage] = useState(1);

    const params = useRouter();

    const category: string = params.query.category as string;

    const [posts, setPosts] = useState(props.posts);

    // this is through component send props needs to refactor to redux or context
    const [search, setSearch] = useState('');

    const getFiltredPosts = async (search: string, queryType: string = 'search') => {
        const res = await blogApi.getPostsSearch(search, queryType);

        return res;
    };

    if (category) {
        useEffect(() => {
            getFiltredPosts(category, 'category').then((res) => {
                setPosts(res);
                setSearch('');
            });
        }, [category]);
    } else if (search) {
        useEffect(() => {
            getFiltredPosts(search, 'search').then((res) => {
                setPosts(res);
            });
        }, [search]);
    } else {
        useEffect(() => {
            setPosts(props.posts);
        }, [props]);
    }

    const { pagesCount, currentPage, latestPosts } = props;

    return (
        <React.Fragment>
            <BlogPageCategory
                layout="classic"
                sidebarPosition="end"
                posts={posts}
                page={page}
                setPage={setPage}
                pagesCount={pagesCount}
                currentPage={currentPage}
                latestPosts={latestPosts}
                setPosts={setPosts}
                setSearch={setSearch}
            />
        </React.Fragment>
    );
}

export async function getStaticProps() {
    // const { page } = context.params;

    const res = await blogApi.getAllPosts(1);
    const posts: IPost[] = res;

    const resCount = await blogApi.getBlogPageCount();
    const postsCount: number = resCount;
    const pagesCount: number = Math.ceil(postsCount / postsOnPage);

    const latestPosts = await blogApi.getLatestPosts(4);
    const props = {
        posts,
        pagesCount: pagesCount,
        // currentPage: page,
        latestPosts: latestPosts,
    };

    return {
        props: props,
    };
}

// export async function getStaticPaths() {
//     const res = await blogApi.getBlogPageCount();
//     const postsCount: number = res;
//     const pagesCount: number = Math.ceil(postsCount / postsOnPage);
//     let paths: any = [];
//     for (let i = 1; i <= pagesCount; i++) {
//         paths.push({ params: { page: `${i}` } });
//     }

//     return {
//         paths: paths,
//         fallback: false,
//     };
// }

export default Page;
