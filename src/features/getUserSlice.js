import { createSlice } from "@reduxjs/toolkit";

//Actions
import { createUser } from "./actions/createUserAction";


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
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, state => {
            state.loading = true
        }).addCase(createUser.fulfilled, (state, action) => {
            state.loading = false,
            state.users.push(action.payload)
        }).addCase(createUser.rejected, (state,action) => {
            state.loading = false,
            state.error = action.payload
        })
    }
})

export default gitUser.reducer