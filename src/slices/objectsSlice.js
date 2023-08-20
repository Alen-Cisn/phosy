import { createSlice } from '@reduxjs/toolkit'

export const objectsSlice = createSlice({
	name: 'objects',
	initialState: {
		value: [{
			id: 0,
			name: 'Left sphere',
			type: 'sphere',
			radius: 3,
			center: [-2, -5, 3],
			material: 0
		},{
			id: 1,
			name: 'Right sphere',
			type: 'sphere',
			radius: 3,
			center: [2, 4, 3],
			material: 0
		},{
			id: 2,
			name: 'Bottom',
			type: 'sphere',
			radius: 100,
			center: [0, -100, -50],
			material: 1
		}]
	},
	reducers: {
		addObject: (state) => {
			let arr = [...state.value];
			// the array will be ordered by id, this gets the greatest id in memory
			const nextID = arr.at(-1).id + 1;
			arr.push({
				id: nextID,
				name: 'Object ' + nextID,
				type: 'sphere',
				radius: 1,
				center: [0, 0, 0],
				material: 0
			});
			state.value = arr;
		},
		deleteObject: (state, action) => {
			let arr = [...state.value];
			arr.splice(arr.findIndex((e) => e.id === action.payload), 1);
			state.value = arr;
		},
		editObject: (state, action) => {
			let arr = [...state.value];
			arr[arr.findIndex((e) => e.id === action.payload.id)] = action.payload;
			state.value = arr;
		}
	}
})

// Action creators are generated for each case reducer function
export const { addObject, deleteObject, editObject } = objectsSlice.actions;

export default objectsSlice.reducer;