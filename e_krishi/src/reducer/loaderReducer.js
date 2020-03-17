import { SERVICE_PENDING, SERVICE_ERROR, SERVICE_SUCCESS_RESPONSE, SERVICE_FAIL_RESPONSE, SHOW_REGISTRATION_SUCCESS } from "../actions/actiontypes";

const InitialState = {
    isLoading: false
}

export function loaderState(state = InitialState,action){
    switch(action.type){
        case SERVICE_PENDING:
            return Object.assign({}, state, {
                isLoading: true
            });
        case SERVICE_SUCCESS_RESPONSE:
            return Object.assign({}, state, {
                isLoading: false
            });
        case SHOW_REGISTRATION_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false
            });
        case SERVICE_FAIL_RESPONSE:
            return Object.assign({}, state, {
                isLoading: false
            });
        case SERVICE_ERROR:
            return Object.assign({}, state, {
                isLoading: false
            });
        default:
            return state;
    }
}