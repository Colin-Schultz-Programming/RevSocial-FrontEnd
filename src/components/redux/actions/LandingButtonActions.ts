import {LandingButtonActionTypes} from '../action-types/LandingButtonActionTypes'

export const login = (payload: boolean) => {
    return { type: LandingButtonActionTypes.SHOW_LOGIN, payload };
}
export const register = (payload: boolean) => {
    return { type: LandingButtonActionTypes.SHOW_REGISTER, payload };
}
export const reset = (payload: boolean) => {
    return { type: LandingButtonActionTypes.SHOW_RESET, payload };
}
export const loggedin = (payload: boolean) => {
    return { type: LandingButtonActionTypes.LOGGED_IN, payload };
}