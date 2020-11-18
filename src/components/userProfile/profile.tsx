import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../../util/axiosConfig';
import { UpdateInfo } from './updateInfo/UpdateInfo';
import { UpdatePicture } from './updatePicture/UpdatePicture';
import './profile.scss';
import icon from "../../resources/icon.jpg";
interface SProp{
    username:string
}

export const Profile:React.FC<SProp> = (props:SProp) => {
    const [picture, setPicture] = useState("");
    const [firstName, setfirstName] = useState("FirstName");
    const [lastName, setlastName] = useState("LastName");

    async function getUser(){ 
        const response = await axiosInstance.get('/users/username/' +props.username);
        if(response.status === 200){
            setPicture(response.data.picture);
            setfirstName(response.data.firstName);
            setlastName(response.data.lastName);
        }
    
    
    }
    useEffect(() => {
        getUser();
      },[]);
  
      const startImage = icon;
    return (
    <div className = "profileField">
      <img style={{borderRadius:"50%", maxWidth: "100px", height:"100px", width:"100px"}} src={(picture==="") ? startImage:picture } alt="Icon"></img>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
      <span style= {{textAlign:"center", fontSize:"x-large"}}>      { props.username} </span>
      <p style = {{fontSize:"x-large"}}>{firstName} {lastName}</p>
    </div>
  )
}