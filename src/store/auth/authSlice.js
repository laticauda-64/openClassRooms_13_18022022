import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const logUser = createAsyncThunk("auth/logUser", async ({ email, password }, thunkApi) => {
	return axios
		.post("user/login", { email: email, password: password })
		.then((resp) => resp.data)
		.catch((err) => {
			return thunkApi.rejectWithValue(err.response.data);
		});
});

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		isConnected: false,
		currentToken: "",
		email: "",
		firstName: "",
		lastName: "",
		status: null,
	},

	reducers: {
		goTest: (state) => {
			state.isConnected = true;
			state.email = "test@test.com";
			state.firstName = "Laticauda";
			state.lastName = "Test";
		},
	},
	extraReducers: {
		[logUser.pending]: (state) => {
			state.status = "loading";
		},
		[logUser.fulfilled]: (state, action) => {
			state.status = "success";
			state.isConnected = true;
			state.currentToken = action.payload.body.token;
		},
		[logUser.rejected]: (state, action) => {
			state.status = "failed";
			console.log(action.payload);
		},
	},
});

export default authSlice.reducer;

export const { goTest } = authSlice.actions;
