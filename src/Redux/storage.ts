import { configureStore } from "@reduxjs/toolkit";
import Log_Slice from './slices/Log_status'
const Store = configureStore({
    reducer:{
        status: Log_Slice
    }
})
export default Store;