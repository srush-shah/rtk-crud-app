import { configureStore } from "@reduxjs/toolkit";
import gitUser from "../features/getUserSlice";

export const store = configureStore({
    reducer: {
        app: gitUser
    }
})