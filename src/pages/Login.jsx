import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import GreenButton from "../components/ui/Button";

export default function Login() {
	return (
		<Main>
			<LoginModal>
				<Icon icon={faUserCircle} />
				<h1>Sign In</h1>
				<form>
					<div className="input-wrapper">
						<label htmlFor="username">Username</label>
						<input type="text" id="username" />
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" />
					</div>
					<div className="input-remember">
						<input type="checkbox" id="remember-me" />
						<label htmlFor="remember-me">Remember me</label>
					</div>
					<GreenButton content="Sign In" />
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
`;

const Icon = styled(FontAwesomeIcon)`
	font-size: 5rem;
`;
