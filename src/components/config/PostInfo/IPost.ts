import { IAuthUser } from "../UserInfo/AuthUser";

export  interface IPost{
   post: {
        postId:number;
        userId:number;
        text:string;
        image:string;
        createDate:string;
        updatedDate:string;
        comments:string[];
        likes:string[];
   }
}

