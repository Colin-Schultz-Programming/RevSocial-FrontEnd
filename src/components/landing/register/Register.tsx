import React, { SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { confirmPass, email, firstName, lastName, password, username } from '../../redux/actions/AuthUserActions';
import { Form, Input } from 'reactstrap';
import { IState } from '../../redux/reducers/index';
import { registerUser } from '../../redux/reducers/AuthUserReducer';
import { IAuthUser } from '../../config/UserInfo/AuthUser';
import { register } from '../../redux/actions/LandingButtonActions';

export const Register: React.FC = () => {
  const dispatch = useDispatch();
  const authUser = useSelector<IState, IAuthUser>(state => state.authUserState.authUserState);
  
  const passwordText = "Passwords do not match!";
  const emailText = "Email and/or username already exists!";

  const [passwordMessage, setPasswordMessage] = useState(false);
  const [emailMessage, setEmailMessage] = useState(false);

  const handleSubmit = (event:SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    setPasswordMessage(false);
    setEmailMessage(false);

    if (event.currentTarget['password'].value !== event.currentTarget['confirm'].value) {
      setPasswordMessage(true);
    } else {
      registerCheck();
    }

    function resolveAfter1Seconds() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(registerUser(dispatch, authUser));
        }, 1000);
      });
    }

    async function registerCheck() {
      await resolveAfter1Seconds();
      if (sessionStorage.getItem("successfulRegister") == null){
        setEmailMessage(true);
      } else{
        dispatch(register(false));
        sessionStorage.removeItem("successfulRegister");
        window.alert("You have successfully registered an account!");
      }
    }
  }
        
  return (
    <Form onSubmit={handleSubmit} className = "landingPageForms">
      <Input type='text' name='firstName' placeholder='First name' onChange={e => dispatch(firstName(e.target.value))}/>
      <br></br>
      <Input type='text' name='lastName' placeholder='Last name' onChange={e => dispatch(lastName(e.target.value))}/>
      <br></br>
      <Input type='text' name='username' placeholder='Username' onChange={e => dispatch(username(e.target.value))}/>
      <br></br>
      <Input type='email' name='email' placeholder='Email address' onChange={e => dispatch(email(e.target.value))}/>
      <br></br>
      <Input type='password' name='password' placeholder='New password' onChange={e => dispatch(password(e.target.value))}/>
      <br></br>
      <Input type='password' name='confirm' placeholder='Confirm password' onChange={e => dispatch(confirmPass(e.target.value))}/>
      <br></br>
      <Input type='submit' value='Register' className = 'btn'/>
      <br></br>
      <Input type ='reset' value = 'Close' className = "btn cancel" onClick={e => dispatch(register(false))}/>
      <span >{passwordMessage ? passwordText : ""}</span>
      <span >{emailMessage ? emailText : ""}</span>
    </Form>
  )
}