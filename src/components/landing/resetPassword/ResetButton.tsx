import React from 'react';
import { login, register, reset} from '../../redux/actions/LandingButtonActions';
import { useDispatch, useSelector } from 'react-redux';
import { IState, IlandingButtonsState } from '../../redux/reducers';


export const ResetButton: React.FC = () => {
  const dispatch = useDispatch();
  const buttons = useSelector<IState, IlandingButtonsState>(state => state.landingButtonState);
  
  function updateButton(){
    dispatch(reset(!buttons.showReset));
    dispatch(login(false));
    dispatch(register(false));
  }

  return (
      <div>
        <button className = 'landingButtons' onClick={() => updateButton()}>
          Reset
        </button>
      </div>
    );
  }

  export default ResetButton;