import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const logUser = createAsyncThunk("auth/logUser", async ({ email, password }, thunkApi) => {
	return axios
		.post("user/login", { email: email, password: password })
		.then((resp) => {
			return resp.data;
		})
		.catch((err) => {
			return thunkApi.rejectWithValue(err.response.data);
		});
});

export const getUserInfo = createAsyncThunk("auth/getUserInfo", async (paramType, thunkApi) => {
	const currentToken = thunkApi.getState().auth.currentToken;
	return axios({ method: "post", url: "user/profile", headers: { Authorization: `Bearer ${currentToken}` } })
		.then((resp) => {
			return resp;
		})
		.catch((err) => {
			return thunkApi.rejectWithValue(err.response.data);
		});
});

export const editUserInfo = createAsyncThunk("auth/editUserInfo", async ({ firstName, lastName }, thunkApi) => {
	const currentToken = thunkApi.getState().auth.currentToken;
	return axios({
		method: "put",
		url: "user/profile",
		data: { firstName: firstName, lastName: lastName },
		headers: { Authorization: `Bearer ${currentToken}` },
	})
		.then((resp) => {
			return resp;
		})
		.catch((err) => {
			return thunkApi.rejectWithValue(err.response.data);
		});
});

/* Handle JWT expired */
// 1. Purge store
// 2. Redirect to login

const initialStore = {
	isConnected: false,
	currentToken: "",
	email: "",
	firstName: "",
	lastName: "",
	status: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState: initialStore,

	reducers: {
		purgeStore() {
			return initialStore;
		},
	},
	extraReducers: {
		[logUser.pending]: (state) => {
			state.status = null;
		},
		[logUser.fulfilled]: (state, action) => {
			state.status = "success";
			state.isConnected = true;
			state.currentToken = action.payload.body.token;
		},
		[logUser.rejected]: (state, { payload }) => {
			state.status = payload;
		},
		[getUserInfo.fulfilled]: (state, { payload }) => {
			const { email, firstName, lastName } = payload.data.body;
			state.email = email;
			state.firstName = firstName;
			state.lastName = lastName;
		},
		[getUserInfo.rejected]: (state, { payload }) => {
			state.status = payload;
		},
		[editUserInfo.fulfilled]: (state, { payload }) => {
			const { firstName, lastName } = payload.data.body;
			state.firstName = firstName;
			state.lastName = lastName;
		},
		[editUserInfo.rejected]: (state, { payload }) => {
			state.status = payload;
		},
	},
});

export default authSlice.reducer;

export const { purgeStore } = authSlice.actions;
