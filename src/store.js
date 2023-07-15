import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tabSelectReducer from './slices/tabSelectSlice';
import materialsReducer from './slices/materialsSlice';
import objectsReducer from './slices/objectsSlice';
import propertiesReducer from './slices/propertiesSlice';
import configurationReducer from './slices/configurationSlice';
import { saveState, loadState } from './localStorage';


const slices = {
	tabSelect: tabSelectReducer,
	materials: materialsReducer,
	objects: objectsReducer,
	properties: propertiesReducer,
	configuration: configurationReducer,
	};
	
const reducer = combineReducers(slices);
const preloadedState = loadState();
const store = configureStore({
	reducer,
	preloadedState,
});



store.subscribe(() => {
	saveState(store.getState());
});
export default store;
