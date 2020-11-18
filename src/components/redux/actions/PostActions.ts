import {PostActionTypes} from '../action-types/PostActionTypes'

export const postId = (payload:any) => {
    return { type: PostActionTypes.POST_ID, payload };
}
export const userId = (payload:any) => {
    return { type: PostActionTypes.USER_ID, payload };
}
export const text = (payload:any) => {
    return { type: PostActionTypes.TEXT, payload };
}
export const image = (payload:any) => {
    return { type: PostActionTypes.IMAGE, payload };
}
export const createDate = (payload:any) => {
    return { type: PostActionTypes.CREATE_DATE, payload };
}
export const updateDate = (payload:any) => {
    return { type: PostActionTypes.UPDATE_DATE, payload };
}
export const comments = (payload:any) => {
    return { type: PostActionTypes.COMMENTS, payload };
}
export const likes = (payload:any) => {
    return { type: PostActionTypes.LIKES, payload };
}

export const allPosts = (payload:any) => {
    return { type: PostActionTypes.ALL_POSTS, payload };
}

