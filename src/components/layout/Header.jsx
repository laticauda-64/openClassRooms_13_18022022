import styled from "styled-components";
import LogoPic from "../../assets/img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { purgeStore } from "../../store/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
	const user = useSelector((state) => state.auth.firstName);
	const dispatch = useDispatch();
	return (
		<TopNav>
			<Logo to="/">
				<img src={LogoPic} alt="Argent Bank Logo" />
			</Logo>
			<Menu>
				{!user ? (
					<Link className="item" to="/user/login">
						<Icon icon={faUserCircle} />
						Sign In
					</Link>
				) : (
					<>
						<Link className="item" to="/user/profile">
							<Icon icon={faUserCircle} />
							{user}
						</Link>
						<Link className="item" to="/user/logout">
							<Icon icon={faSignOutAlt} />
							Sign Out
						</Link>
					</>
				)}
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

const Logo = styled(Link)`
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
