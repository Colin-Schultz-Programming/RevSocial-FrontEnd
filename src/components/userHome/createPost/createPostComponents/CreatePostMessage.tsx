import React, { SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from 'reactstrap';
import { axiosInstance } from '../../../../util/axiosConfig';

import {IPost} from '../../../config/PostInfo/IPost';
import { text } from '../../../redux/actions/PostActions';
import { IState } from '../../../redux/reducers';
import { createPost } from '../../../redux/reducers/postReducer';
import { ReactS3Client } from '../../../S3ImageSender/ReactToS3';

export const CreatePostMessage:React.FC<any> = (props:any) => {
    const dispatch = useDispatch();
    useSelector<IState, IPost>(state => state.postState.postState);

    const handleSubmit = async (event:SyntheticEvent<HTMLFormElement>)=>{
        event.preventDefault();

        const image = event.currentTarget['image'].files[0]
        const message_text = event.currentTarget["message_text"].value;

        let location = null;
        if (image != undefined) {
            const data = await ReactS3Client.uploadFile(image);
            location = data.location;
        }
        const post = {
            id: 0,
            user: {
                username: sessionStorage.getItem('username')
            },
            postDate: null,
            message: message_text,
            picture: location,
            likes: ["free"]
        }
        console.log(post);
        createPost(post);
    }
    return(
        <div >
            <Form onSubmit={handleSubmit} className="pageForms">
                <textarea name="message_text" maxLength={250} rows={4} cols={35} onChange={e => dispatch(text(e.target.value))} required/>
                {/* <SendingImage/> */}
                <Input type="file" name="image" accept="image/*" />
                <Input type="submit" value="Post"/>
            </Form>
        </div>
    )
}