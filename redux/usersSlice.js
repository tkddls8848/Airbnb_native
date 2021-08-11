import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState:{
        isLoggedin: false,
        token: null
    },
    reducers: {
        logIn(state, action){
            state.isLoggedin = true;
            state.token = action.payload.token;
        },
        logout(state, action){
            state.isLoggedin = false;
            state.token = null;
        }
    }
});

export const {logIn,logout} = userSlice.actions;
export default userSlice.reducer;