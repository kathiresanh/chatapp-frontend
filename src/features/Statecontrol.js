import { createSlice } from '@reduxjs/toolkit'
import { io } from "socket.io-client";


export const StateSlice = createSlice({
    name: 'userstate',
    initialState: {
        value: 0,
        isloggedin: false,
    
    },
    reducers: {
        showAlert: (state) => {
            alert("hello")

        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { showAlert, decrement, incrementByAmount } = StateSlice.actions

export default StateSlice.reducer