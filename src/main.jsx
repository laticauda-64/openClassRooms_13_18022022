import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/base.css";
import "./assets/css/reset.css";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import store from "./store/store";
import axios from "axios";
import { PersistGate } from "redux-persist/lib/integration/react";
import { App } from "./App";

/**
 * Axios config
 */
axios.defaults.baseURL = "http://localhost:3001/api/v1";
axios.defaults.headers.common["accept"] = `application/json`;
axios.defaults.headers.common["Content-Type"] = `application/json`;

let persistor = persistStore(store);

/**
 * React
 */

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
