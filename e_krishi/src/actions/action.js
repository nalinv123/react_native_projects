import { userService } from "../services/"
import config, { loginUrl, registerUrl } from "../config/config"
import { SERVICE_SUCCESS, SERVICE_FAIL, SERVICE_PENDING, HIDE_ALERT, SERVICE_ERROR, SERVICE_SUCCESS_RESPONSE, SERVICE_FAIL_RESPONSE, SHOW_REGISTRATION_SUCCESS } from "./actiontypes";

export const delearAction = {
    login,
    register
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
            if (respose.data.status) {
                console.log(respose.data.token);
            } else {
                dispatch(showFailureResponse(respose.data));
            }
        })
        .catch(error=>{
            dispatch(showError(error))
        })
    }
}

function register(dealerInfo) {
    return dispatch => {
        dispatch(serviceActionPending());
        let apiendpoint = registerUrl;
        let payload = dealerInfo;
        let header = {
            "Content-Type":"application/json"
        };

        userService.POST(apiendpoint, header, payload)
            .then(response => {
                if (response.data.status) {
                    console.log(response.data.status);
                    dispatch(showRegistrationSuccess(response.data));
                }
                else {
                    console.log("In else : ", response.data.status);
                    dispatch(showFailureResponse(response.data));
                }
            })
            .catch(error => {
                dispatch(showError(error))
            })
        console.log("In register action dealer info : ", dealerInfo);
    }
}

export function showSuccessResponse(respose) {
    return{
        type: SERVICE_SUCCESS_RESPONSE,
        payload:respose
    }
}

export function showFailureResponse(response) {
    return {
        type: SERVICE_FAIL_RESPONSE,
        payload:response
    }
}

export function showError(error){
    return{
        type: SERVICE_ERROR,
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

export function showRegistrationSuccess(response) {
    return {
        type: SHOW_REGISTRATION_SUCCESS,
        payload: response
    }
}
