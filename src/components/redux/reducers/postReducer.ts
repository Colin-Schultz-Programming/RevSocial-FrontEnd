import { Dispatch } from "redux";
import { IPostState } from ".";
import { axiosInstance } from "../../../util/axiosConfig";
import { PostActionTypes } from "../action-types/PostActionTypes";
import { allPosts } from "../actions/PostActions";
import "babel-polyfill"

const initalState:IPostState={
    postState:{
        post: {
            postId: 0,
            userId: 0,
            text: "",
            image: "",
            createDate: "",
            updatedDate: "",
            comments: [],
            likes: [""]
        }
    },
    allPostsState: {
        posts: []
    }
}

export const PostReducer = (state = initalState, action:any):IPostState =>{
    switch(action.type){
        case PostActionTypes.POST_ID:
            return{
                ...state,
                postState: {
                    post: {
                        ...state.postState.post,
                        postId: action.payload
                    }
                }
            }
        case PostActionTypes.USER_ID:
            return{
                ...state,
                postState: {
                    post: {
                        ...state.postState.post,
                        userId: action.payload
                    }
                }
            }
        case PostActionTypes.TEXT:
            return{
                ...state,
                postState: {
                    post: {
                        ...state.postState.post,
                        text: action.payload
                    }
                }
            }
        case PostActionTypes.IMAGE:
            return{
                ...state,
                postState: {
                    post: {
                        ...state.postState.post,
                        image: action.payload
                    }
                }
            }
        case PostActionTypes.CREATE_DATE:
            return{
                ...state,
                postState: {
                    post: {
                        ...state.postState.post,
                        createDate: action.payload
                    }
                }
            }
        case PostActionTypes.UPDATE_DATE:
            return{
                ...state,
                postState: {
                    post: {
                        ...state.postState.post,
                        updatedDate: action.payload
                    }
                }
            }
        case PostActionTypes.COMMENTS:
            return{
                ...state,
                postState: {
                    post: {
                        ...state.postState.post,
                        comments: action.payload
                    }
                }
            }
        case PostActionTypes.LIKES:
            return{
                ...state,
                postState: {
                    post: {
                        ...state.postState.post,
                        likes: action.payload
                    }
                }
            }
        case PostActionTypes.ALL_POSTS:
            return{
                ...state,
                allPostsState:{
                   ...state.allPostsState,
                   posts: action.payload
                }
            }
                default:
                    return state;
    }
}

export const allUserPosts = async (dispatch: Dispatch) => {
    try{
        const response = await axiosInstance.get('/posts');
        if(response.status === 200){
            const posts = await response.data;
            console.log(posts);
            try{
            dispatch(allPosts(posts));
            }
            catch(e){
                console.log("nerd");
            }
        }
    } catch(e){
        console.log(e)
    }

}
export const allUserPostsByUsername = async (dispatch: Dispatch, username:string) => {
    try{
        let u = username;
        let stringin:string = "/posts/user/" + u;

        const response = await axiosInstance.get(stringin);
        if(response.status === 200){
            const posts = await response.data;
            console.log(posts);
            
            dispatch(allPosts(posts));
        }
    } catch(e){
        console.log(e)
    }

}

export const createPost = async (post:any) => {
    try{
        const response = await axiosInstance.post('/posts', post)
        if(response.status === 200){
            console.log('Post created')
        }
    } catch(e){
        console.log(e)
    }
}

export const updatePost = async (post:any) => {
    try{
        const response = await axiosInstance.put('/posts', post)
        if(response.status === 200){
            console.log('Post created')
        }
    } catch(e){
        console.log(e)
    }
}
