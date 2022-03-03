import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Dashboard from "./pages/Dashboard";
import { useSelector } from "react-redux";

export const App = () => {
	const isAuth = useSelector((state) => state.auth.isConnected);

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="user/login" element={isAuth ? <Navigate to={"user/profile"} /> : <Login />} />
				{isAuth && (
					<>
						<Route path="user/profile" element={<Dashboard />} />
					</>
				)}
				<Route path="user/logout" element={<Logout />} />
				<Route path="*" element={<Navigate to={isAuth ? "user/profile" : "/"} />} />
			</Route>
		</Routes>
	);
};
