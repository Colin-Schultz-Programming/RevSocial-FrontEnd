import React from 'react';
import { login, register, reset} from '../../redux/actions/LandingButtonActions';
import { useDispatch, useSelector } from 'react-redux';
import { IState, IlandingButtonsState } from '../../redux/reducers';
export const LoginButton: React.FC = () => {
  

  const dispatch = useDispatch();
  const buttons = useSelector<IState, IlandingButtonsState>(state => state.landingButtonState);
  
  function updateButton(){
    dispatch(login(!buttons.showLogin));
    dispatch(reset(false));
    dispatch(register(false));
  }

  return (
      <div>
        <button className = 'landingButtons' onClick={() => updateButton()}>
          Log In 
        </button>
      </div>
    );
  
  }

export default LoginButton;
