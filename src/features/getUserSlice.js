import { createSlice } from "@reduxjs/toolkit";


// User Slice
export const gitUser = createSlice({
    name: 'gitUser',
    initialState: {
        users: [],
        loading: false,
        error: null,
        searchData: []
    },
    reducers: {
        searchUser: (state,action) => {
            state.searchData = action.payload
        }
    }
})