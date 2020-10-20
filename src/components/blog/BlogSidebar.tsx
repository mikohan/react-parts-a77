// react
import React, { useEffect, useMemo, useState } from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
// application
import WidgetAboutUs from '~/components/widgets/WidgetAboutUs';
import WidgetCategories from '~/components/widgets/WidgetCategories';
import WidgetComments from '~/components/widgets/WidgetComments';
import WidgetNewsletter from '~/components/widgets/WidgetNewsletter';
import WidgetPosts from '~/components/widgets/WidgetPosts';
import WidgetSearch from '~/components/widgets/WidgetSearch';
import WidgetTags from '~/components/widgets/WidgetTags';
import { blogApi } from '~/api';
import { ICategory } from '~/interfaces/category';
// data

import dataBlogWidgetComments from '~/data/blogWidgetComments';
import { IPost } from '~/interfaces/post';

interface Props {
    latestPosts?: IPost[];
}

function BlogSidebar(props: Props) {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const { latestPosts } = props;
    const comments = useMemo(() => dataBlogWidgetComments.slice(0, 3), []);

    useEffect(() => {
        let canceled = false;

        blogApi.getCategories({ depth: 1 }).then((result) => {
            if (canceled) {
                return;
            }

            setCategories(result);
        });

        return () => {
            canceled = true;
        };
    }, []);

    return (
        <React.Fragment>
            <WidgetSearch />
            <WidgetAboutUs />
            <WidgetCategories widgetTitle={<FormattedMessage id="HEADER_CATEGORIES" />} categories={categories} />
            <WidgetPosts widgetTitle="Latest Posts" latestPosts={latestPosts} />
            <WidgetNewsletter />
            <WidgetComments widgetTitle="Latest Comments" comments={comments} />
            <WidgetTags widgetTitle="Tags Cloud" />
        </React.Fragment>
    );
}

export default BlogSidebar;
