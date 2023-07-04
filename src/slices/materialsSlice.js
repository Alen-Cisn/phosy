import { createSlice } from '@reduxjs/toolkit'

export const materialsSlice = createSlice({
	name: 'materials',
	initialState: {
		value: [{
			id: 1,
			name: 'Material 1',
			type: 'lambertian'
		}]
	},
	reducers: {
		addMaterial: (state) => {
            // the array will be ordered by id, this gets the greatest id in memory
			let arr = [...state.value];
            let greatestID = arr.length ? arr.at(-1).id + 1 : 1;
			arr.push({
				id: greatestID,
				name: 'Material ' + greatestID,
				type: 'lambertian'
			});
			state.value = arr;
		},
		deleteMaterial: (state, action) => {
			let arr = [...state.value];
			arr.splice(arr.findIndex((e) => e.id === action.payload), 1);
			state.value = arr;
		},
        editMaterial: (state, action) => {
			let arr = [...state.value];
			arr[arr.findIndex((e) => e.id === action.payload.id)] = action.payload;
			state.value = arr;
        }
	}
})

// Action creators are generated for each case reducer function
export const { addMaterial, deleteMaterial, editMaterial } = materialsSlice.actions;

export default materialsSlice.reducer;