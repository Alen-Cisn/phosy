import { configureStore } from '@reduxjs/toolkit'
import tabSelectReducer from './slices/tabSelectSlice'
import materialsReducer from './slices/materialsSlice'
import objectsReducer from './slices/objectsSlice'
import propertiesReducer from './slices/propertiesSlice'

export default configureStore({
	reducer: {
		tabSelect: tabSelectReducer,
		materials: materialsReducer,
		objects: objectsReducer,
		properties: propertiesReducer
	}
});