import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const initialState = {
    status: false,
    data: null,
    accessToken: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: { 
        login: (state,action)=>{
            state.status  = true;
            state.data = action.payload;
            state.accessToken = action.payload.accessToken
        },
        logout: (state, action) =>{
            state.status = false;
            state.data = null;
            state.accessToken = null;
        }
    }
})

export const useUser= ()=>{
    return useSelector(state=>state.auth.data)
}


export const {login, logout} = authSlice.actions;
export const currentUser = (state)=>state.auth.data
export default authSlice.reducer