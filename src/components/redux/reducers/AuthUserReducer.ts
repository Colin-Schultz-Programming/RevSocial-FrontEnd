import { IAuthUserState } from ".";
import { AuthUserActionTypes } from "../action-types/AuthUserActionTypes";
import "babel-polyfill"
import { IAuthUser } from "../../config/UserInfo/AuthUser";
import { axiosInstance } from "../../../util/axiosConfig";

const initialState:IAuthUserState = {
    authUserState: {
        authUser: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            username: "",
            passwordConfirm: ""
        }
    }
}

export const authUserReducer = ( state = initialState, action: any ): IAuthUserState => {
    
    switch(action.type){
        case AuthUserActionTypes.EMAIL:
            return {
                ...state,
                authUserState: {
                    authUser: {
                        ...state.authUserState.authUser,
                        email: action.payload
                    }
                }
            }
        case AuthUserActionTypes.FIRST_NAME:
            return {
                ...state,
                authUserState: {
                    authUser: {
                        ...state.authUserState.authUser,
                        firstName: action.payload
                    }
                }
            }
        case AuthUserActionTypes.LAST_NAME:
            return {
                ...state,
                authUserState: {
                    authUser: {
                        ...state.authUserState.authUser,
                        lastName: action.payload
                    }
                }
            }
        case AuthUserActionTypes.PASSWORD:
            return {
                ...state,
                authUserState: {
                    authUser: {
                        ...state.authUserState.authUser,
                        password: action.payload
                    }
                }
            }
        case AuthUserActionTypes.USERNAME:
            return {
                ...state,
                authUserState: {
                    authUser: {
                        ...state.authUserState.authUser,
                        username: action.payload
                    }
                }
            }
        case AuthUserActionTypes.CONFIRM_PASSWORD:
            return {
                ...state,
                authUserState: {
                    authUser: {
                        ...state.authUserState.authUser,
                        passwordConfirm: action.payload
                    }
                }
            }
            default:
                return state;
    }
}

export const registerUser = async (dispatch: any, userToRegister:IAuthUser) => {
    const response = await axiosInstance.post('/users', {
        id: 0,
        email: userToRegister.authUser.email,
        password: userToRegister.authUser.password,
        firstName: userToRegister.authUser.firstName,
        lastName: userToRegister.authUser.lastName,
        username: userToRegister.authUser.username,
        picture: null
    })
    if (response.data.user_id != 0) {
        sessionStorage.setItem('successfulRegister', 'true');
    }
}

// login
export const loginUser = async (dispatch: any, userToLogin:IAuthUser, props:any) => {
   try{
       const response = await axiosInstance.put('/users/login', {
            email: userToLogin.authUser.email,
            password: userToLogin.authUser.password
        });

        if(response.status === 200){
            const data = response.data.email;
            sessionStorage.setItem('user', data);
            sessionStorage.setItem('username', response.data.username);
        } else {
            console.log(response.status);
        }
   } catch(e){
        console.log(e);
   }
}




// update user info
export const updateUser = async (dispatch: any, userToUpdate:IAuthUser) => {    
    const response = await axiosInstance.put('/users', {
        email: sessionStorage.getItem("user"),
        password: userToUpdate.authUser.password,
        firstName: userToUpdate.authUser.firstName,
        lastName: userToUpdate.authUser.lastName,
        username: userToUpdate.authUser.username,
    });

    if (response.data.length != 0) {
        sessionStorage.setItem('successfulUpdate', 'true');
    }
}
