import { configureStore } from '@reduxjs/toolkit'
import testSlice from './slices/testSlice'

export default configureStore({
    reducer: {
        testSlice
    }
})