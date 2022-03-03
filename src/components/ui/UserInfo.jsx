import Button from "./Button";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { editUserInfo } from "../../store/auth/authSlice";

export default function UserInfo() {
	/**
	 * Store
	 */
	const { email, firstName, lastName } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const firstNameRef = useRef(null);
	const lastNameRef = useRef(null);

	/**
	 * States
	 */
	const [isEditing, setIsEditing] = useState(false);

	if (isEditing) {
		return (
			<>
				<h1>
					Welcome back
					<br />
					<EditForm>
						<div className="input-wrapper left">
							<input type="text" id="firstname" defaultValue={firstName} ref={firstNameRef} />
							<button
								onClick={(e) => {
									e.preventDefault();
									dispatch(editUserInfo({ firstName: firstNameRef.current.value, lastName: lastNameRef.current.value }));
									setIsEditing(false);
								}}>
								Save
							</button>
						</div>
						<div className="input-wrapper right">
							<input type="text" id="lastname" defaultValue={lastName} ref={lastNameRef} />
							<button
								onClick={(e) => {
									e.preventDefault();
									setIsEditing(false);
								}}>
								Cancel
							</button>
						</div>
					</EditForm>
					<br />
				</h1>
			</>
		);
	}
	return (
		<>
			<h1>
				Welcome back
				<br />
				{firstName} {lastName} !
				<br />
				{email}
			</h1>
			<Button content="Edit Name" type="small" func={() => setIsEditing(true)} />
		</>
	);
}

const EditForm = styled.form`
	display: flex;
	justify-content: center;
	.input-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;

		input {
			font-size: 24px;
			width: 250px;
		}

		button {
			font-size: 18px;
			font-weight: 400;
			border: 1px solid violet;
			width: 85px;
			margin-top: 10px;
			cursor: pointer;
		}
	}

	.right {
		padding-left: 5px;
	}

	.left {
		padding-right: 5px;
		button {
			align-self: end;
		}
	}
	@media (max-width: 920px) {
		.input-wrapper {
			input {
				font-size: 18px;
				width: 170px;
			}
		}
	}
`;
