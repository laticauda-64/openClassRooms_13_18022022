import Button from "./Button";

export default function UserInfo({ firstname, lastname }) {
	return (
		<>
			<h1>
				Welcome back
				<br />
				{firstname} {lastname}!
			</h1>
			<Button content="Edit Name" type="small" />
		</>
	);
}
