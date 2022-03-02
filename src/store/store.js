import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "auth",
	version: 1,
	storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export default configureStore({
	reducer: { auth: persistedReducer },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});
