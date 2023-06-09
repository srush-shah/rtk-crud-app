import { createAsyncThunk } from "@reduxjs/toolkit";



// Read all users action
export const getAllUsers = createAsyncThunk('getAllUsers', async (args, {rejectWithValue}) => {
    const res = await fetch('https://6448ceb8b88a78a8f0f47996.mockapi.io/users')

    try {
       const result = await res.json()
       return result
    } catch (error) {
       return rejectWithValue(error) 
    }
})