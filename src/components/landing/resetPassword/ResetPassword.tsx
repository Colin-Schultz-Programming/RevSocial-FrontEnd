import React, { SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from 'reactstrap';
import { axiosInstance } from '../../../util/axiosConfig';
import { reset } from '../../redux/actions/LandingButtonActions';

export const ResetPassword: React.FC = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (event:SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello");
    const response = await axiosInstance.put(`users/reset/${event.currentTarget['email'].value}`);
    console.log(response);
    if (response.status == 200) {
      window.alert('An email was sent with your new password!');
      window.location.href = '/';
    } else {
      window.alert('Something went wrong!');
      window.location.href = '/';
    }
 }
  
  return (
    <Form className = "landingPageForms" onSubmit={handleSubmit}>
      <Input type='email' name='email' placeholder='Email' required 
        /* onChange={e => dispatch(firstName(e.target.value))} */ />
      <br></br>
      <Input type='submit' value='Reset password' className = 'btn'/>
      <br></br>
      <Input type ='reset' value = 'Close' className = "btn cancel" onClick={e => dispatch(reset(false))}/>
    </Form>
  )
}

