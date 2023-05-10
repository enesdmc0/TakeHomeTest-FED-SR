import {configureStore} from "@reduxjs/toolkit";
import {reducer as gmailReducer} from "../gmail-slice"


const store = configureStore({
    reducer: {
        gmail: gmailReducer
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch