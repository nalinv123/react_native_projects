import { SERVICE_PENDING, SERVICE_SUCCESS, SERVICE_FAIL } from "../actions/actiontypes";

const InitialState = {
    isLoading: false
}

export function loaderState(state = InitialState,action){
    switch(action.type){
        case SERVICE_PENDING:
            return Object.assign({}, state, {
                isLoading: true
            })
        case SERVICE_SUCCESS:
        case SERVICE_FAIL:
            return Object.assign({}, state, {
                isLoading: false
            })
        default:
            return state;
    }
}