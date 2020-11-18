import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardBody, CardImg, CardText } from 'reactstrap';
import { IAllPosts } from '../../../config/PostInfo/IAllPosts';
import { username } from '../../../redux/actions/AuthUserActions';
import { IState } from '../../../redux/reducers';
import { HeaderComponent } from '../../createPost/createPostComponents/HeaderComponent';
import { updatePost } from '../../../redux/reducers/postReducer';

interface IMessage{
    post:any;
    postID:number;
    usersLiked:string[];
    userImage:string;
    postText:string;
    image:string;
    username:string

}

export const ViewMessage: React.FC<IMessage> = (props:IMessage) => {
    

     const [likes, setLikes] = useState(props.usersLiked.length);

    function like(){
        if(props.post.likes === null)
        {
            props.post.likes.push(sessionStorage.getItem('username'));
        }else{

            if(props.post.likes.includes(sessionStorage.getItem('username'))){
                props.post.likes.splice(props.post.likes.indexOf(sessionStorage.getItem('username')), 1);
                
            } 
            else{
                props.post.likes.push(sessionStorage.getItem('username'));
                
            }
        }
        updatePost(props.post);
        
        if(props.post.likes === null){
            setLikes(0);
        }else{
            setLikes(props.usersLiked.length); 
            console.log(props.usersLiked)
            console.log(props.post.likedBy)     

        }
    }
   

    return(
        <Card style={{backgroundColor:"#444", width: '40rem', border: 'solid', padding: '10px', margin: '5px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <HeaderComponent username={props.username} userImage={props.userImage} />
           <CardText>{props.postText}</CardText>
           <CardBody>
                <img src={props.image} style={{maxHeight:500, maxWidth:500}}></img>
                
                
           </CardBody>
           <button className = "likeButton" onClick={like} style={{color: (props.post.likes===null) ? " ": props.post.likes.includes(sessionStorage.getItem('username')) ?  'orange' : 'white'}  }>
               Likes: {likes}
            </button>
        </Card>
    )
}