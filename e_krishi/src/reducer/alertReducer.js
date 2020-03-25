import { HIDE_ALERT, SERVICE_ERROR, SERVICE_SUCCESS_RESPONSE, SERVICE_FAIL_RESPONSE, SHOW_REGISTRATION_SUCCESS } from "../actions/actiontypes"

const INITIAL_STATE = {
    isAlert: false,
    title: "",
    message: "",
    confirmText: ""
}

export function alertState(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SERVICE_SUCCESS_RESPONSE:
            return{
                ...state,
                isAlert:false
            }
        case SHOW_REGISTRATION_SUCCESS:
            return Object.assign({}, state, {
                isAlert: true,
                title: "Success",
                message: action.payload.response,
                confirmText: "Okay"
            });
        case SERVICE_FAIL_RESPONSE:
            //console.log(action);
            return Object.assign({}, state, {
                isAlert: true,
                title: "Sorry",
                message: action.payload.response,
                confirmText: "Okay"
            });
        case SERVICE_ERROR:
            return Object.assign({}, state, {
                isAlert: true,
                title: "Sorry",
                message: "Something went wrong. Please try again after some time.",
                confirmText: "Okay"
            });
        case HIDE_ALERT:
            return Object.assign({}, state, {
                isAlert: false,
                title: "",
                message: "",
                confirmText: ""
            });
        default:
            return state;
    }
};