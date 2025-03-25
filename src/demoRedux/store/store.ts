import { configureStore } from "@reduxjs/toolkit";
import reducerStore from './slice'
const store = configureStore({
    reducer: {
        count: reducerStore
    }
})

export default store