import React, { SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Label } from 'reactstrap';
import { IAuthUser } from '../../config/UserInfo/AuthUser';
import { firstName, lastName, password, username } from '../../redux/actions/AuthUserActions';
import { IState } from '../../redux/reducers';
import { updateUser } from '../../redux/reducers/AuthUserReducer';
import  '../profile.scss';

export const UpdateInfo: React.FC = () => {

  const dispatch = useDispatch();
  const authUser = useSelector<IState, IAuthUser>(state => state.authUserState.authUserState);

  const passwordText = "Passwords do not match!";
  const emailText = "Username already exists!";

  const [passwordMessage, setPasswordMessage] = useState(false);
  const [emailMessage, setEmailMessage] = useState(false);

  const handleSubmit = (event:SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = event.currentTarget["username"].value;
    setPasswordMessage(false);
    if (event.currentTarget['new_password'].value !== event.currentTarget['con_password'].value) {
      setPasswordMessage(true);
    } else {
      updateCheck();
    }

    function resolveAfter1Seconds() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(updateUser(dispatch, authUser));
        }, 1000);
      });
    }

    async function updateCheck() {
      await resolveAfter1Seconds();
      if (sessionStorage.getItem("successfulUpdate") == null){
        setEmailMessage(true);
      } else{
        sessionStorage.removeItem("successfulUpdate");
        window.alert("You have successfully updated your account!");
        sessionStorage.setItem("username", username);
        window.location.href = '/account';
      }
    }
  }

  return (
    <div className = "pageFormField">
    <Form onSubmit={handleSubmit} className = "pageForms">
      <legend>Update Information</legend>
      <br />
      <Label for='first'>First Name</Label>
      <Input type='text' id='first' name='firstName' required 
        onChange={e => dispatch(firstName(e.target.value))} />
      <br></br>
      <Label for='last'>Last Name</Label>
      <Input type='text' id='last' name='lastName' required 
        onChange={e => dispatch(lastName(e.target.value))} />
      <br></br>
      <Label for='username'>Username</Label>
      <Input type='text' id='username' name='username' required 
        onChange={e => dispatch(username(e.target.value))} />
      <br></br>
      <Label for='new_password'>New Password</Label>
      <Input type='password' id='new_password' name='newpassword' required
        onChange={e => dispatch(password(e.target.value))} />
      <br></br>
      <Label for='con_password'>Confirm Password</Label>
      <Input type='password' id='con_password' name='confirm' required />
      <br></br>
      <Input type='submit' value='Update' className = 'btn'/>
      <span >{passwordMessage ? passwordText : ""}</span>
      <span >{emailMessage ? emailText : ""}</span>
    </Form>
    </div>
  )
}
