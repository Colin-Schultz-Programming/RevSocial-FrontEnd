import React from 'react';
import { Card, CardBody } from 'reactstrap';


import { CreatePostMessage } from './createPostComponents/CreatePostMessage';

import '../post.scss'

interface IProps{
    //posts:IPost[];

}
const username =sessionStorage.getItem("username");
export const CreatePost: React.FC<any> = (props:any) => {
    return(
        <div className="displayPostCreate"  >
            <Card style={{width: '15%', border:'solid',padding:'5px', margin:'5px',}} > 
                <CardBody>
                    <CreatePostMessage/>
                </CardBody>
            </Card>
        </div>
    )
}