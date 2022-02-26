import styled from "styled-components";
import LogoPic from "../../assets/img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<TopNav>
			<Logo>
				<Link to={"/"}>
					<img src={LogoPic} alt="Argent Bank Logo" />
				</Link>
			</Logo>
			<Menu>
				<Link className="item" to="/login">
					<Icon icon={faUserCircle} />
					Sign In
				</Link>
			</Menu>
		</TopNav>
	);
}

/**
 * Styles
 */

const TopNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 20px;

	a {
		font-weight: bold;
		color: #2c3e50;
	}

	img {
		max-width: 100%;
		width: 200px;
	}
`;

const Logo = styled.a`
	display: flex;
	align-items: center;
`;

const Menu = styled.div`
	text-decoration: none;
	margin-right: 0.5rem;

	:hover {
		text-decoration: underline;
	}

	.item {
		text-decoration: none;
		margin-right: 0.5rem;

		:hover {
			text-decoration: underline;
		}
	}
`;

const Icon = styled(FontAwesomeIcon)`
	text-decoration: none;
	margin-right: 0.5rem;
`;
