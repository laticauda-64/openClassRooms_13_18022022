import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { purgeStore } from "../store/auth/authSlice";
import { useNavigate } from "react-router-dom";

/**
 * A simple component to handle LogOut route & functionnality
 */

export default function Logout() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(purgeStore());
		navigate("/");
	}, []);

	return null;
}
