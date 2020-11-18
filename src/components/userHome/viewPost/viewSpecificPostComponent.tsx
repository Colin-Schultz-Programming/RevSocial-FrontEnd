import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IAllPosts } from '../../config/PostInfo/IAllPosts';
import { IState } from '../../redux/reducers';

import { ViewMessage } from './viewPostComponents/ViewMessage';
import ".././post.scss"
import { allUserPostsByUsername } from '../../redux/reducers/postReducer';
import { Profile } from '../../userProfile/profile';
import { createPropertySignature } from 'typescript';

interface SProp{
    username:string
}


export const ViewSpecificPostComponent: React.FC<SProp> = (props:SProp) =>{
    const dispatch = useDispatch();
    const allPosts = useSelector<IState, IAllPosts>(state => state.postState.allPostsState);
    
    
    useEffect(() => {
        allUserPostsByUsername(dispatch, props.username);
      },[]);

    const postCard = (allUserPosts: any) => {
        if(allUserPosts.posts.length === 0 || allUserPosts.posts === undefined){
            return(
                <div>

                </div>
            )
        } else {
            allUserPosts.posts.reverse();
            return allUserPosts.posts.map((post:any, i:number) => {
                return <ViewMessage post={post} postID={post.post_id} postText={post.message} userImage={post.user.picture} image={post.picture} key={i} username={post.user.username} usersLiked={post.likes}/>
            })
        }
    }

    return (
        <div className="displayPost">
            <Profile username = {props.username}/>
            {postCard(allPosts)}
     </div>
    )
}