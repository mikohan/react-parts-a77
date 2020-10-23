// react
import React, { useState } from 'react';
// application
import { Search20Svg } from '~/svg';

interface Props {
    setSearch(search: string): void;
}

function WidgetSearch(props: Props) {
    const [tmpSearch, setTmpSearch] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        props.setSearch(tmpSearch);
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
