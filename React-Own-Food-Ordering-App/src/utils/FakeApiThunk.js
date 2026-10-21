import { createAsyncThunk } from "@reduxjs/toolkit";

// syntax: createAsyncThunk(type, asyncCallback)
export const FakeApiThunk = createAsyncThunk('users-list', async({first,second,third},{rejectWithValue})=>{
    console.log(rejectWithValue)
    console.log('first',first)
    console.log('second',second)
    console.log('third',third)
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataJson = await response.json();
    return dataJson;
})