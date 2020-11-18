import React, { SyntheticEvent } from 'react';
import { Form, Input, Modal, ModalBody } from 'reactstrap';
import { axiosInstance } from '../../util/axiosConfig';



export const SearchComponent:React.FC = () =>{
    
    const findByName= async (event:SyntheticEvent<HTMLFormElement>) =>{

        try{
             const person = await axiosInstance.get('/users/username/'+event.currentTarget["username"].value)
             console.log(person.data)
             sessionStorage.setItem("search", person.data.username);
             window.location.href = '/search';

         }catch(err:any){
             alert(err)
         };
         return null;
    }

    return(
        <div style={{textAlign:'center', position:'fixed', top:'15%', zIndex:2}}>
            <Form className="forms" onSubmit={findByName}>  
                <Input type="text" placeHolder="username" name="username"/>
            </Form>
        </div>
    )
}