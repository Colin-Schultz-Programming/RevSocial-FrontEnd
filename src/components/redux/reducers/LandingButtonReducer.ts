import { IlandingButtonsState } from ".";
import { LandingButtonActionTypes } from "../action-types/LandingButtonActionTypes";

const initialState:IlandingButtonsState = {
    showRegister: false,
    showLogin:false,
    showReset:false,
    loggedIn:false
}


export const landingButtonReducer = ( state = initialState, action: any): IlandingButtonsState => {
    switch(action.type){
        case LandingButtonActionTypes.SHOW_LOGIN:
            return {
                ...state,
                showLogin: action.payload
            }
        case LandingButtonActionTypes.SHOW_REGISTER:
            return{
                ...state,
                showRegister: action.payload
            }
        case LandingButtonActionTypes.SHOW_RESET:
            return{
                ...state,
                showReset: action.payload
            }
        case LandingButtonActionTypes.LOGGED_IN:
            return{
                ...state,
                loggedIn: action.payload
            }
        default:
            return state;
    }
}