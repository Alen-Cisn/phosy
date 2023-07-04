import { createSlice, } from '@reduxjs/toolkit'

export const tabSelectSlice = createSlice({
	name: 'tabSelect',
	initialState: {
		value: 'materials'
	},
	reducers: {
		selectMaterials: (state) => {
			state.value = 'materials'
		},
		selectObjects: (state) => {
			state.value = 'objects'
		}
	}
})

// Action creators are generated for each case reducer function
export const { selectMaterials, selectObjects } = tabSelectSlice.actions

export default tabSelectSlice.reducer