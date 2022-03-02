import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const App = () => {
	const isAuth = useSelector((state) => state.auth.isConnected);

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="login" element={<Login />} />
				{isAuth && (
					<>
						<Route path="dashboard" element={<Dashboard />} />
					</>
				)}
				<Route path="*" element={<Navigate to={isAuth ? "dashboard" : "/"} />} />
			</Route>
		</Routes>
	);
};
