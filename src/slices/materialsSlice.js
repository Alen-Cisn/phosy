// import { useSelector } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit'

export const materialsSlice = createSlice({
	name: 'materials',
	initialState: {
		value: [{
			id: 0,
			name: 'Metal',
			type: 'metal',
			color: '#AAAAAA'
		},
		{
			id: 1,
			name: 'Bottom',
			type: 'lambertian',
			color: '#0000AA'
		}]
	},
	reducers: {
		addMaterial: (state, action) => {
			let newMaterial = structuredClone(action.payload);
			let arr = [...state.value];
			// the array will be ordered by id, this gets the greatest id in memory
			newMaterial.id = arr.at(-1).id + 1;
			newMaterial.currentName = undefined;
			arr.push(newMaterial);
			state.value = arr;
		},
		deleteMaterial: (state, action) => {
			// const objects = useSelector((s) => s.objects.value);
			//we won't let delete the material if it's being used
			// if (!objects.find(e => e.material === action.payload)) {
				let arr = [...state.value];
				arr.splice(arr.findIndex((e) => e.id === action.payload), 1);
				state.value = arr;
			// } else {
				//don't
			// }
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