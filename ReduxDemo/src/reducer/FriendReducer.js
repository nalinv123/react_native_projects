import { combineReducers } from "redux";
import { ADD_FRIEND } from "../actions/actionTypes";

const INITIAL_STATE = {
    current: [],
    possible: [
        'Allie',
        'Gator',
        'Lizzie',
        'Reptar'
    ],
};

const friendReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_FRIEND:
            /* 
                Saving the current and possible friend list from earlier state.
                We are not changing the state directly in case another action is changing state at same time.
            */
            const {
                current,
                possible
            } = state;

            //Getting a friend from possible friend list to add it in current friend list.
            const addedFriend = possible.splice(action.payload, 1);

            // Actually adding a friend to current friend list.
            current.push(addedFriend);

            // Finally, updating our redux state.
            const newState = { current, possible };
            return newState;
        default:
            return state;
    }
};

export default combineReducers({
    friends: friendReducer
});