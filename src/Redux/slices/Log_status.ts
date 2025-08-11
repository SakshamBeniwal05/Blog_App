import { createSlice } from "@reduxjs/toolkit";

interface props{
    status?: boolean,
    data?: any
}
const initialState:props = {
    status: false,
    data: null
}

const Log_Slice = createSlice({
    name: "status",
    initialState,
    reducers:{
        Login: (state)=>{
            state.status = true;
        },
        Logout: (state)=>{
            state.status = false;
        }
    }
})

export const {Login,Logout} = Log_Slice.actions
export default Log_Slice.reducer