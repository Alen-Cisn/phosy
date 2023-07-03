import { configureStore } from '@reduxjs/toolkit'
import tabSelectReducer from './slices/tabSelectSlice'

export default configureStore({
	reducer: {
		tabSelectReducer
	}
})