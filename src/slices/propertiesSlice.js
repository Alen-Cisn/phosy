// import { useSelector } from 'react-redux';
import * as THREE from 'three';
import { createSlice } from '@reduxjs/toolkit'
import { degToRad } from 'three/src/math/MathUtils';

export const propertiesSlice = createSlice({
	name: 'properties',
	initialState: {
		aspectRatio: {
			y: 16,
			x: 6
		},
		horizontalResolution: 600,
		samplesPerPixel: 20,
		maxDepth: 20,
		camera: new THREE.PerspectiveCamera(70, 1.7777777777, 0.001, 1000)
	},
	reducers: {
		changeRatioX: (state, action) => {
			state.aspectRatio.x = action.payload;
		},
		changeRatioY: (state, action) => {
			state.aspectRatio.y = action.payload;
		},
		changeCameraCoordinateX: (state, action) => {
			state.camera.position.x = action.payload;
		},
		changeCameraCoordinateY: (state, action) => {
			state.camera.position.y = action.payload;
		},
		changeCameraCoordinateZ: (state, action) => {
			state.camera.position.z = action.payload;
		},
		changeResolution: (state, action) => {
			state.horizontalResolution = action.payload;
		},
		changeFov: (state, action) => {
			state.camera.fov = action.payload;
			state.camera.updateProjectionMatrix();
		},
		changeSamplesPerPixel: (state, action) => {
			state.samplesPerPixel = action.payload;
		},
		changeMaxDepth: (state, action) => {
			state.maxDepth = action.payload;
		},
		changeWorldDirection: (state, action) => {
			state.camera.rotateOnAxis(action.payload, degToRad(1));
		}
	}
})

// Action creators are generated for each case reducer function
export const { 
	changeRatioX, 
	changeRatioY,
	changeFov,
	changeSamplesPerPixel,
	changeMaxDepth,
	changeCameraCoordinateX,
	changeCameraCoordinateY,
	changeCameraCoordinateZ,
	changeResolution,
	changeWorldDirection } = propertiesSlice.actions;

export default propertiesSlice.reducer;