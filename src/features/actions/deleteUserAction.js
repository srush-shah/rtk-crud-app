import { createAsyncThunk } from "@reduxjs/toolkit";


// Delete a user action
export const deleteUser = createAsyncThunk('deleteUser',async (id, {rejectWithValue}) => {
    const res = await fetch(
        `https://6448ceb8b88a78a8f0f47996.mockapi.io/users/${id}`, 
        {method: 'DELETE'}
    )

    try {
        const result = await res.json()
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})

