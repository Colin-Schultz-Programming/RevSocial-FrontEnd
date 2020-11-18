import { AuthUserActionTypes } from '../action-types/AuthUserActionTypes'

export const email = (payload: any) => {
    return { type: AuthUserActionTypes.EMAIL, payload };
}

export const firstName = (payload: any) => {
    return { type: AuthUserActionTypes.FIRST_NAME, payload };
}

export const lastName = (payload: any) => {
    return { type: AuthUserActionTypes.LAST_NAME, payload };
}

export const username = (payload: any) => {
    return { type: AuthUserActionTypes.USERNAME, payload };
}

export const password = (payload: any) => {
    return { type: AuthUserActionTypes.PASSWORD, payload };
}

export const confirmPass = (payload: any) => {
    return { type: AuthUserActionTypes.CONFIRM_PASSWORD, payload };
}

export const loggedInUser = (payload: any) => {
    return { type: AuthUserActionTypes.LOGGED_IN_USER, payload};
}