import { createAsyncThunk } from "@reduxjs/toolkit";


// Update User Action
export const updateUser = createAsyncThunk('updateUser', async (data, {rejectWithValue}) => {
    const res = await fetch(
        `https://6448ceb8b88a78a8f0f47996.mockapi.io/users/${data.id}`,
        {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    )

    try {
        const result = res.json()
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
})