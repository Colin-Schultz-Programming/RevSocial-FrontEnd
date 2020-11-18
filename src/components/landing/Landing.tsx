import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IState, IlandingButtonsState } from '../redux/reducers';
import './landing.scss';
import { Register } from './register/Register';
import { Login } from './login/Login';
import logo from '../../resources/Rev Social.png';
import { ResetPassword } from './resetPassword/ResetPassword';

export const Landing: React.FC = () => {
  const buttons = useSelector<IState, IlandingButtonsState>(state => state.landingButtonState);

  return (
    <body >
      <div className="landingContainer">
        <div className= "landingImage">
          <img src = "https://freerangestock.com/sample/121614/business-people-shaking-hands-in-agreement.jpg" />
        </div>
        <div className= "landingText">
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <p/><p/><p/><p/><p/><p/><p/><p/>
          <h1>Welcome to RevSocial!</h1>
          <p>Join now to talk to fellow employees </p>
          <p>and see what is happening in our company today!</p>
          <p>We look forward to getting to know you!</p>
        </div>
      </div>
      {(buttons.showLogin || buttons.showRegister || buttons.showReset) && <div className = "landingPageFormField"  >
        <img className = "imgLandingLogo" alt = "logo" src = {logo}/>
        { buttons.showRegister && <Register/>}
        { buttons.showLogin && <Login/>}
        { buttons.showReset && <ResetPassword/>}
      </div>}
    </body>
  )
}