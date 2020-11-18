import React from 'react';
import './landing.scss';
import { LoginButton } from './login/Login Button';
import { RegisterButton } from './register/Register Button';
import { ResetButton } from './resetPassword/ResetButton';

export const LoginRegister: React.FC = () => {
  
  
  return (
      <div className = "landingButtonsPanel inline">
        <LoginButton />
        <ResetButton />
        <RegisterButton />
      </div>
  )
}