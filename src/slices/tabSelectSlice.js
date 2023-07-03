import { createSlice } from '@reduxjs/toolkit'

export const tabSelectSlice = createSlice({
	name: 'tabSelect',
	initialState: {
		value: 'materials',
	},
	reducers: {
		selectMaterials: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes.
			// Also, no return statement is required from these functions.
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