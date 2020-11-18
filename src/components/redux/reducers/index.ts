import { combineReducers } from 'redux';
import { IAuthUser } from '../../config/UserInfo/AuthUser';
import { LandingButtonActionTypes } from '../action-types/LandingButtonActionTypes';
import { authUserReducer } from './AuthUserReducer';
import { landingButtonReducer } from './LandingButtonReducer';
import { IPost } from '../../config/PostInfo/IPost';

import { IAllPosts } from '../../config/PostInfo/IAllPosts';
import { PostReducer } from './postReducer';


export interface IState{
    authUserState: IAuthUserState;
    landingButtonState: IlandingButtonsState;
    postState:IPostState;
}

export interface IPostState{
    postState:IPost,
    allPostsState:IAllPosts
}

export interface IAuthUserState{
    authUserState:IAuthUser
}

export interface IlandingButtonsState{
    showRegister: boolean;
    showLogin:boolean;
    showReset:boolean;
    loggedIn:boolean;
}

export const state = combineReducers<IState>({
    authUserState: authUserReducer,
    landingButtonState: landingButtonReducer,
    postState: PostReducer,
})