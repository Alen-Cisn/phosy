import { configureStore } from '@reduxjs/toolkit'
import tabSelectReducer from './slices/tabSelectSlice'
import materialsReducer from './slices/materialsSlice'
import objectsReducer from './slices/objectsSlice'

export default configureStore({
	reducer: {
		tabSelect: tabSelectReducer,
		materials: materialsReducer,
		objects: objectsReducer
	}
});