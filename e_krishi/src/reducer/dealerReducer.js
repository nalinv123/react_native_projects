import { SERVICE_SUCCESS, SERVICE_FAIL, SERVICE_PENDING } from "../actions/actiontypes";

const INITIAL_STATE = {
    dealer: {
        email: "",
        name: "",
        mobile: ""
    },
};

/* const farmerReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default :
            return state;
    }
} */

export function dealerState (state = INITIAL_STATE, action) {
    switch(action.type) {
        case SERVICE_PENDING:
        case SERVICE_SUCCESS:
        case SERVICE_FAIL:
            const {
                dealer,
                farmer,
                isLoading
            } = state

            const newState = { dealer, farmer, isLoading }
            return newState;
        default :
            return state;
    }
}
