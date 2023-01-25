import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import searchReducer from './search/searchSlice'
import {apiSlice} from "./apiSlice";
export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        search:searchReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    //devTools: true
})