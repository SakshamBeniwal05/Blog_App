import { createSlice } from "@reduxjs/toolkit";

interface props{
    status?: boolean,
    data?: any
}
const initialState:props = {
    status: true,
    data: null
}

const Log_Slice = createSlice({
    name: "status",
    initialState,
    reducers:{
        Login: (state,action)=>{
            state.status = true;
            state.data = action.payload.data
        },
        Logout: (state)=>{
            state.status = false;
            state.data = null;
        }
    }
})

export const {Login,Logout} = Log_Slice.actions
export default Log_Slice.reducer