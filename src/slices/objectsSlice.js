import { createSlice } from '@reduxjs/toolkit'

export const objectsSlice = createSlice({
	name: 'objects',
	initialState: {
		value: [{
			id: 0,
			name: 'Object 0',
			type: 'sphere',
			radius: 1,
			center: [0, 0, 0],
			material: 0
		}]
	},
	reducers: {
		addObject: (state) => {
            // the array will be ordered by id, this gets the greatest id in memory
			let arr = [...state.value];
			arr.push({
				id: arr.length,
				name: 'Object ' + arr.length,
				type: 'sphere',
				radius: arr.length,
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