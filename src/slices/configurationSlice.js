
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import loadTranslation from '../i18n';

const lang = window.navigator.language.substring(0, 2);
let messages = {};

loadTranslation(lang).then((e) => {
	messages = e;
});

const changeLang = createAsyncThunk(
	'configuration/changeLang',
	async (lang) => {
		const messages = await loadTranslation(lang);
		return {
			messages,
			lang
		};
	}
);

export const configurationSlice = createSlice({
	name: 'configuration',
	initialState: {
		langSettings: {
			lang,
			messages
		}
	},
	extraReducers: (builder) => {
		builder.addCase(changeLang.fulfilled, (state, action) => {
			state.langSettings = action.payload;
		})
	},
});

export { changeLang };
export default configurationSlice.reducer;