// react
import React, { useEffect, useState } from 'react';
// third-party
import classNames from 'classnames';
// application
import BlockHeader from '~/components/blocks/BlockHeader';
import BlockSpace from '~/components/blocks/BlockSpace';
import BlogSidebar from '~/components/blog/BlogSidebar';
import PageTitle from '~/components/shared/PageTitle';
import Pagination from '~/components/shared/Pagination';
import PostCard, { IPostCardLayout } from '~/components/shared/PostCard';
import { IBlogPageLayout, IBlogPageSidebarPosition } from '~/interfaces/pages';
import url from '~/services/url';
// data

import { IPost } from '~/interfaces/post';

interface Props {
    layout: IBlogPageLayout;
    sidebarPosition: IBlogPageSidebarPosition;
    posts: IPost[];
    page: number;
    setPage: any;
    pagesCount?: number;
    currentPage?: number | string;
    latestPosts: IPost[];
    setPosts(posts: IPost[]): void;
}

const cardLayoutMap: Record<IBlogPageLayout, IPostCardLayout> = {
    classic: 'grid',
    list: 'list',
    grid: 'grid-sm',
};

function BlogPageCategory(props: Props) {
    const { layout, sidebarPosition, posts, page, setPage, pagesCount, currentPage, latestPosts, setPosts } = props;

    const handleClick = () => {
        console.log('Clicked herer');
        setPosts(posts.slice(0, 1));
    };

    let curPageToSend: number = currentPage ? +currentPage : +page;

    // const [page, setPage] = useState(1);

    return (
        <React.Fragment>
            <PageTitle>
                <span onClick={handleClick}>Latest News</span>
            </PageTitle>

            <span onClick={handleClick}>Latest News</span>
            <BlockHeader
                pageTitle="Latest News"
                breadcrumb={[
                    { title: 'Home', url: '' },
                    { title: 'Breadcrumb', url: '' },
                    { title: 'Current Page', url: '' },
                ]}
            />

            <div className={`block blog-view blog-view--layout--${layout}`}>
                <div className="container">
                    <div className="blog-view__body">
                        {sidebarPosition === 'start' && (
                            <div className="blog-view__item blog-view__item-sidebar">
                                <BlogSidebar />
                            </div>
                        )}
                        <div className="blog-view__item blog-view__item-posts">
                            <div className="block posts-view">
                                <div
                                    className={classNames('posts-view__list', 'posts-list', {
                                        'posts-list--layout--classic': layout === 'classic',
                                        'posts-list--layout--list': layout === 'list',
                                        'posts-list--layout--grid-2': layout === 'grid',
                                    })}
                                >
                                    <div className="posts-list__body">
                                        {posts.map((post, index) => (
                                            <div key={index} className="posts-list__item">
                                                <PostCard post={post} layout={cardLayoutMap[layout]} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="posts-view__pagination">
                                    <Pagination
                                        current={curPageToSend}
                                        siblings={1}
                                        total={pagesCount}
                                        onPageChange={setPage}
                                        urlTo="blogPage"
                                    />
                                </div>
                            </div>
                        </div>
                        {sidebarPosition === 'end' && (
                            <div className="blog-view__item blog-view__item-sidebar">
                                <BlogSidebar latestPosts={latestPosts} />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <BlockSpace layout="before-footer" />
        </React.Fragment>
    );
}

export default BlogPageCategory;
