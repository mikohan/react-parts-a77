import { IPost, IFetchPostAction } from './blogActions';
import { ActionTypes } from './blogActionsTypes';
import {
    ICategories,
    IFetchCategoryAction,
    ISearchPostAction,
    IFilterCategoryAction,
    IFetchSinglePostAction,
} from './blogActions';
import { combineReducers } from 'redux';

export interface IStoreState {
    posts: IPost[];
    singlePost: IPost;
    categories: ICategories[];
    search: string;
    catFilter: number;
}

export const postReducer = (state: IPost[] = [], action: IFetchPostAction) => {
    switch (action.type) {
        case ActionTypes.FETCH_POSTS:
            return action.payload;

        default:
            return state;
    }
};

export const categoryReducer = (state: ICategories[] = [], action: IFetchCategoryAction) => {
    switch (action.type) {
        case ActionTypes.FETCH_CATEGORY:
            return action.payload;
        default:
            return state;
    }
};

export const searchPostReducer = (state: string = '', action: ISearchPostAction) => {
    switch (action.type) {
        case ActionTypes.SEARCH_POST:
            return action.payload;
        default:
            return state;
    }
};

export const filterCategoryReducer = (state: number = 0, action: IFilterCategoryAction) => {
    switch (action.type) {
        case ActionTypes.FILTER_CATEGORY:
            return action.payload;
        default:
            return state;
    }
};

export const postSingleReducer = (
    state: IPost = {
        id: 1,
        title: '',
        text: '',
        image: '',
        date: '',
        slug: '',
        author: '',
        categories: [],
    },
    action: IFetchSinglePostAction
) => {
    switch (action.type) {
        case ActionTypes.FETCH_POST:
            return action.payload;
        default:
            return state;
    }
};

export const mainBlogReducer = combineReducers<IStoreState>({
    posts: postReducer,
    singlePost: postSingleReducer,
    categories: categoryReducer,
    search: searchPostReducer,
    catFilter: filterCategoryReducer,
});
