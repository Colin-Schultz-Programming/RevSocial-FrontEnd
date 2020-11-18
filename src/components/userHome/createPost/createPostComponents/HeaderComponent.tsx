import React from 'react';
import icon from "../../../../resources/icon.jpg";
interface IProps{
    userImage:any;
    username:any;
}

export const HeaderComponent:React.FC<IProps> = (props:IProps) => {
    const startImage:string = icon;
    return (
        <div style={{ height:"50px", lineHeight:"45px", display:'flex', flexDirection:'row', justifyContent:'left', verticalAlign: "middle", position:"relative"}}>
            <img style={{borderRadius:"50%", maxWidth: "50px", height:"50px", width:"50px"}} src={(props.userImage==null) ? startImage:props.userImage } alt="Icon"/>
           <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
           <span style= {{textAlign:"center", textDecoration:"underline", fontSize:"x-large"}}>      { props.username} </span>
        </div>
    )
}