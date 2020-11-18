import React from 'react';
import { CreatePost } from './createPost/CreatePost';
import { ViewSpecificPostComponent } from './viewPost/viewSpecificPostComponent';



export const Home: React.FC = () => {
    return(
        <div>
            <CreatePost/>
            
            <ViewSpecificPostComponent username = {sessionStorage.getItem("username") || ""}/>
          
        </div>
    )
}