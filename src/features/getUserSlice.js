import { createSlice } from "@reduxjs/toolkit";

//Actions
import { createUser } from "./actions/createUserAction";
import { getAllUsers } from "./actions/readUsersAction";


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
        }).addCase(createUser.fulfilled, (state,action) => {
            state.loading = false
            state.users.push(action.payload)
        }).addCase(createUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        builder.addCase(getAllUsers.pending, state => {
            state.loading = true
        }).addCase(getAllUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
        }).addCase(getAllUsers.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default gitUser.reducer