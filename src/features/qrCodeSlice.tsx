import { createSlice } from '@reduxjs/toolkit';

export const qrCodeSlice = createSlice({
	name: 'qrcode',
	initialState: { text: '' },
	reducers: {
		update: (state, action) => {
			state.text = action.payload.text;
		},
	},
});

export const { update } = qrCodeSlice.actions;
export default qrCodeSlice.reducer;
