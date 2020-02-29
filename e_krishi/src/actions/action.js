import { LOGIN_BUTTON_CLICKED } from "./actiontypes";

export const loginClicked = user_inputs => (
    {
        type: LOGIN_BUTTON_CLICKED,
        payload: user_inputs
    }
);