import { SERVICE_SUCCESS, SERVICE_FAIL, SERVICE_PENDING, SERVICE_ERROR } from "../actions/actiontypes";

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
            
        case SERVICE_ERROR:
            return state;
        default :
            return state;
    }
}
