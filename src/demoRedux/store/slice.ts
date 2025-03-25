import { createSlice } from "@reduxjs/toolkit"

const initState: number = 0

const slicer = createSlice({
    name: 'number',
    initialState: initState,
    reducers: {
        increase: (state) => {
            return state + 1
        },
        decrease: (state) => {
            return state - 1
        }
    }
})

export const { increase, decrease } = slicer.actions
export default slicer.reducer