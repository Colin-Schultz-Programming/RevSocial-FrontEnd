import React, { SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from 'reactstrap';

import { IAuthUser } from '../../config/UserInfo/AuthUser';

import { email, password } from '../../redux/actions/AuthUserActions';
import { loggedin, login } from '../../redux/actions/LandingButtonActions';
import { IState } from '../../redux/reducers';
import { loginUser } from '../../redux/reducers/AuthUserReducer';

export const Login: React.FC = (props:any) => {
  const loginText = "Login Failed: Incorrect email and/or password!";
  const dispatch = useDispatch();
  const authUser = useSelector<IState, IAuthUser>(state => state.authUserState.authUserState);

  const [failMessage, setFailMessage] = useState(false);

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    sessionStorage.setItem("LoggedIn", "false")
    setFailMessage(false);
    e.preventDefault();

    function resolveAfter1Seconds() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(loginUser(dispatch, authUser, props));
        }, 1000);
      });
    }

    async function loginCheck() {
      await resolveAfter1Seconds();      
      if (sessionStorage.getItem("user") === "undefined" || sessionStorage.getItem("user") === "null" ){
        setFailMessage(true);
      } else{
        sessionStorage.setItem("LoggedIn", "true")
        dispatch(loggedin(true));
        window.location.href = '/userHome';
      }
    }

    loginCheck();
  }
  
  return (
    <Form className = "landingPageForms" onSubmit={handleSubmit}>
      <Input type='email' name='email' placeholder='Email address' onChange={e => dispatch(email(e.target.value))}/>
      <br></br>
      <Input type='password' name='password' placeholder='Password' onChange={e => dispatch(password(e.target.value))}/>
      <br></br>
      <Input type='submit' value='Login' className = "btn"/>
      <br></br>
      <Input type ='reset' value = 'Close' className = "btn cancel" onClick={e => dispatch(login(false))}/>
      <span >{failMessage ? loginText : ""}</span>
    </Form>
  )
}
export default Login;
