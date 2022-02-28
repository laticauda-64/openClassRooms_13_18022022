import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		isConnected: false,
		currentToken: "",
		email: "",
		firstName: "",
		lastName: "",
	},

	reducers: {
		// Actions to dial with Api
		// connect: "",
		// deConnect: "",
		// updateProfile: "",
		goTest: (state) => {
			state.isConnected = true;
			state.email = "test@test.com";
			state.firstName = "Laticauda";
			state.lastName = "Test";
		},
	},
});

export default authSlice.reducer;
export const { goTest } = authSlice.actions;
