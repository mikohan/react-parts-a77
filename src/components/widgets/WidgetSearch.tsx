// react
import React, { useState } from 'react';
// application
import { Search20Svg } from '~/svg';
import Router from 'next/router';

interface Props {
    setSearch(search: string): void;
}

function WidgetSearch(props: Props) {
    const [tmpSearch, setTmpSearch] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        props.setSearch(tmpSearch);
        if (tmpSearch) {
            Router.push(
                {
                    pathname: '/demo/blog/classic-right-sidebar',
                    query: { search: tmpSearch },
                },

                undefined,
                { shallow: true }
            );
        } else {
            Router.push(
                '/demo/blog/classic-right-sidebar',

                undefined,
                { shallow: true }
            );
        }

        setTmpSearch('');
    };
    const handleChange = (e: any) => {
        setTmpSearch(e.target.value);
    };
    return (
        <div className="card widget widget-search">
            <form onSubmit={handleSubmit} action="" className="widget-search__form">
                <input
                    className="widget-search__input"
                    type="search"
                    placeholder="Blog search..."
                    value={tmpSearch}
                    onChange={handleChange}
                />
                <button type="submit" className="widget-search__button">
                    <Search20Svg />
                </button>
                <div className="widget-search__field" />
            </form>
        </div>
    );
}

export default WidgetSearch;
