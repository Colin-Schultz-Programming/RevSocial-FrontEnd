import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IAllPosts } from '../../config/PostInfo/IAllPosts';
import { IState } from '../../redux/reducers';
import { allUserPosts } from '../../redux/reducers/postReducer';
import { ViewMessage } from './viewPostComponents/ViewMessage';
import ".././post.scss"

export const ViewPostComponent: React.FC = () =>{
    
    const dispatch = useDispatch();
    const allPosts = useSelector<IState, IAllPosts>(state => state.postState.allPostsState);
    
    useEffect(() => {
        allUserPosts(dispatch);
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
        <div className="displayAllPost">
            {postCard(allPosts)}
     </div>
    )
}