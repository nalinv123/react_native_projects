import { userService } from "../services/"
import config, { loginUrl } from "../config/config"
import { SERVICE_SUCCESS, SERVICE_FAIL, SERVICE_PENDING, HIDE_ALERT } from "./actiontypes";

export const delearLoginAction = {
    login,
    // logout
}

function login(email,password){
    return dispatch=>{
        dispatch(serviceActionPending())
        let apiendpoint = loginUrl
        let payload = {
            email:email,
            password:password
        };
        let header={
            "Content-Type":"application/json"
        };

        userService.POST(apiendpoint,header,payload)
        .then(respose=>{
            console.log("response",respose);
            dispatch(showResponse(respose))
        })
        .catch(error=>{
            dispatch(showError(error))
        })
    }
}

export function showResponse(respose){
    return{
        type: SERVICE_SUCCESS,
        payload:respose
    }
}

export function showError(error){
    return{
        type: SERVICE_FAIL,
        payload:error
    }
}

export function serviceActionPending() {
    return {
        type: SERVICE_PENDING
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
} 
