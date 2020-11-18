
import React from 'react';
import { login, register, reset} from '../../redux/actions/LandingButtonActions';

import { useDispatch, useSelector } from 'react-redux';
import { IState, IlandingButtonsState } from '../../redux/reducers';
export const RegisterButton: React.FC = () => {
  
  
  const dispatch = useDispatch();
  const buttons = useSelector<IState, IlandingButtonsState>(state => state.landingButtonState);


  function updateButton(){
    dispatch(register(!buttons.showRegister));
    dispatch(login(false));
    dispatch(reset(false));
  }
  return (
      <div>
        <button className = 'landingButtons' onClick={() => updateButton()}>
          Register
        </button>
      </div>
    );
}
export default  RegisterButton;