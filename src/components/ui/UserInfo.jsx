import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";

import { goTest } from "../../store/auth/authSlice.js";

export default function UserInfo({ firstname, lastname }) {
	const email = useSelector((state) => state.auth.email);
	const dispatch = useDispatch();
	return (
		<>
			<h1>
				Welcome back
				<br />
				{firstname} {lastname}!
				<br />
				{email}
			</h1>
			<Button content="Edit Name" type="small" func={() => dispatch(goTest())} />
		</>
	);
}
