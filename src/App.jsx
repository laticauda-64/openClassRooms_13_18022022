import { Outlet } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

export const App = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};
