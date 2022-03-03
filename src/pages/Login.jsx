import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import GreenButton from "../components/ui/Button";
import { useEffect, useState } from "react";
import { logUser } from "../store/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
	/**
	 * States
	 */
	const [email, setEmail] = useState("john@stark.com");
	const [password, setPassword] = useState("password123");
	const [isChecked, setIsChecked] = useState(false);

	/**
	 * Store
	 */
	const isConnected = useSelector((state) => state.auth.isConnected);
	const isError = useSelector((state) => state.auth?.status?.status === 400);
	const errorMsg = useSelector((state) => state.auth?.status?.message);

	const dispatch = useDispatch();

	/**
	 * React Router
	 */
	const navigate = useNavigate();

	/**
	 * UseEffects
	 */
	useEffect(() => {
		if (isConnected) {
			navigate("/dashboard");
		}
	}, [isConnected]);

	/**
	 * Custom functions
	 */
	const removeErrorGlow = (e) => {
		e.target.classList.remove("field-error");
	};

	return (
		<Main>
			<LoginModal>
				<Icon icon={faUserCircle} />
				<h1>Sign In</h1>
				<form>
					<div className="input-wrapper">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							className={isError ? "field-error" : ""}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							onFocus={removeErrorGlow}
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							value={password}
							className={isError ? "field-error" : ""}
							onChange={(e) => setPassword(e.target.value)}
							onFocus={removeErrorGlow}
						/>
					</div>
					<div className="input-remember">
						<input type="checkbox" id="remember-me" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
						<label htmlFor="remember-me">Remember me</label>
					</div>
					<GreenButton
						content="Sign In"
						func={(e) => {
							e.preventDefault();
							dispatch(logUser({ email: email, password: password }));
						}}
					/>
					{isError && <ErrorMessage>{errorMsg}</ErrorMessage>}
				</form>
			</LoginModal>
		</Main>
	);
}

const Main = styled.main`
	flex: 1;
	background-color: #12002b;
`;

const LoginModal = styled.section`
	box-sizing: border-box;
	background-color: white;
	width: 300px;
	margin: 0 auto;
	margin-top: 3rem;
	padding: 2rem;

	h1 {
		margin: 20px 0;
	}

	.input-remember {
		display: flex;
	}

	.input-remember label {
		margin-left: 0.25rem;
	}

	.input-wrapper {
		display: flex;
		flex-direction: column;
		text-align: left;
		margin-bottom: 1rem;
	}

	.input-wrapper label {
		font-weight: bold;
	}

	.input-wrapper input {
		padding: 5px;
		font-size: 1.2rem;
	}

	.field-error {
		border: 1px solid red;
		background: #ff000024;
		box-shadow: 0 0 0.5em red;
		animation: shake 0.2s ease-in-out 0s 2;
	}

	@keyframes shake {
		0% {
			margin-left: 0rem;
		}
		25% {
			margin-left: 0.5rem;
		}
		75% {
			margin-left: -0.5rem;
		}
		100% {
			margin-left: 0rem;
		}
	}
`;

const ErrorMessage = styled.p`
	margin-top: 15px;
	color: red;
`;

const Icon = styled(FontAwesomeIcon)`
	font-size: 5rem;
`;
