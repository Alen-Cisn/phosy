// import { useSelector } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit'

export const propertiesSlice = createSlice({
	name: 'properties',
	initialState: {
		aspectRatio: {
			y: 16,
			x: 6
		},
		horizontalResolution: 600,
		fov: 90,
		near: 0.001,
		far: 100,
		cameraCoordinates: [0, 0, 0]
	},
	reducers: {
		changeRatioX: (state, action) => {
			state.aspectRatio.x = action.payload;
		},
		changeRatioY: (state, action) => {
			state.aspectRatio.y = action.payload;
		},
		changeCameraCoordinateX: (state, action) => {
			state.cameraCoordinates[0] = action.payload;
		},
		changeCameraCoordinateY: (state, action) => {
			state.cameraCoordinates[1] = action.payload;
		},
		changeCameraCoordinateZ: (state, action) => {
			state.cameraCoordinates[2] = action.payload;
		},
		changeResolution: (state, action) => {
			state.horizontalResolution = action.payload;
		},
		changeFov: (state, action) => {
			state.aspectRatio.fov = action.payload;
		}
	}
})

// Action creators are generated for each case reducer function
export const { changeRatioX, changeRatioY, changeFov, changeCameraCoordinateX, changeCameraCoordinateY, changeCameraCoordinateZ, changeResolution } = propertiesSlice.actions;

export default propertiesSlice.reducer;