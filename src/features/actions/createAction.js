import { createAsyncThunk } from "@reduxjs/toolkit";


//Create Action
export const createUser = createAsyncThunk('createUser', async (data, {rejectWithValue}) => {
    const res = await fetch('https://6448ceb8b88a78a8f0f47996.mockapi.io/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    try {
        const result = await res.json()
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})