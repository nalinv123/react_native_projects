import { combineReducers } from "redux"
import { LOGIN_BUTTON_CLICKED } from "../actions/actiontypes";

const INITIAL_STATE = {
    dealer: {
        email: "",
        password: ""
    }
}

const farmerReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default :
            return state;
    }
}

const dealerReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOGIN_BUTTON_CLICKED:
            
        default : 
            return state;
    }
}

export default combineReducers(
    {
        farmer: farmerReducer,
        dealer: dealerReducer
    }
)