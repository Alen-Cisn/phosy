// import { useSelector } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit'

export const propertiesSlice = createSlice({
	name: 'properties',
	initialState: {
		aspectRatio: {
			y: 16,
			x: 6
		},
		fov: 90,
		near: 0.001,
		far: 100
	},
	reducers: {
		changeRatioX: (state, action) => {
			state.aspectRatio.x = action.payload;
		},
		changeRatioY: (state, action) => {
			state.aspectRatio.y = action.payload;
		},
		changeFov: (state, action) => {
			state.aspectRatio.fov = action.payload;
		}
	}
})

// Action creators are generated for each case reducer function
export const { changeRatioX, changeRatioY, changeFov } = propertiesSlice.actions;

export default propertiesSlice.reducer;