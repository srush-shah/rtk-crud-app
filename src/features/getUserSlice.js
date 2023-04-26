import { createSlice } from "@reduxjs/toolkit";

//Actions
import { createUser } from "./actions/createUserAction";
import { getAllUsers } from "./actions/readUsersAction";
import { deleteUser } from "./actions/deleteUserAction";
import { updateUser } from "./actions/updateUserAction";


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
        builder.addCase(deleteUser.pending, state => {
            state.loading = true
        }).addCase(deleteUser.fulfilled, (state, action) => {
            state.loading = false
            
            const {id} = action.payload

            if(id) {
                state.users = state.users.filter(ele => ele.id !== id)
            }
        }).addCase(deleteUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        builder.addCase(updateUser.pending, state => {
            state.loading = true
        }).addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false
            state.users = state.users.map(user => (
                user.id === action.payload.id ? action.payload : user
            ))
        }).addCase(updateUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default gitUser.reducer