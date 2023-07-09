import { configureStore } from '@reduxjs/toolkit';
import tabSelectReducer from './slices/tabSelectSlice';
import materialsReducer from './slices/materialsSlice';
import objectsReducer from './slices/objectsSlice';
import propertiesReducer from './slices/propertiesSlice';
import configurationReducer from './slices/configurationSlice';
import { saveState, loadState } from './localStorage';

const state = loadState();

const store = configureStore({
	reducer: {
		tabSelect: tabSelectReducer,
		materials: materialsReducer,
		objects: objectsReducer,
		properties: propertiesReducer,
		configuration: configurationReducer,
	},
	preloadedState: {
		langSettings: state.langSettings,
		materials: state.materials,
		objects: state.objects,
		properties: state.properties,
	},
});

store.subscribe(() => {
	saveState(store.getState());
});

export default store;
