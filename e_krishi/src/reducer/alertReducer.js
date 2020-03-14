import { SERVICE_SUCCESS, SERVICE_FAIL, HIDE_ALERT } from "../actions/actiontypes"

const INITIAL_STATE = {
    isAlert: false,
    title: "",
    message: "",
    confirmText: ""
}

export function alertState(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SERVICE_SUCCESS:
        case SERVICE_FAIL:
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
            })
        default:
            return state;
    }
};