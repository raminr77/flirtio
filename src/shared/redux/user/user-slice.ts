import { createSlice } from '@reduxjs/toolkit';
import { REDUCERS } from "../../constants/reducers.ts";


const initialState: GUser = {
    email: '',
    lastName: '',
    firstName: '',
    isAuthenticated: false
};

const userSlice = createSlice({
    name: REDUCERS.USER,
    initialState,
    reducers: {
        userLoginAction: (_, action) => {
            return {
                isAuthenticated: true,
                ...(action.payload || {})
            };
        },
        userLogoutAction: () => {
            return {
                email: '',
                lastName: '',
                firstName: '',
                isAuthenticated: false
            };
        }
    }
});

export const { userLogoutAction, userLoginAction } = userSlice.actions;

export default userSlice.reducer;
