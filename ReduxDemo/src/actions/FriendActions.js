import { ADD_FRIEND } from "./actionTypes";

export const addFriend = friendIndex => (
    {
        type: ADD_FRIEND,
        payload: friendIndex
    }
);