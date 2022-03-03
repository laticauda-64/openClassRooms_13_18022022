import { useEffect } from "react";
import styled from "styled-components";
import Account from "../components/ui/Account";
import UserInfo from "../components/ui/UserInfo";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../store/auth/authSlice";

export default function Dashboard() {
	/**
	 * Store
	 */
	const dispatch = useDispatch();

	/**
	 * UseEffects
	 */
	useEffect(() => {
		dispatch(getUserInfo());
	}, []);

	return (
		<Main>
			<TopSection>
				<UserInfo />
			</TopSection>
			<Account reference="Argent Bank Checking (x8349)" amount="$2,082.79" status="Available Balance" />
			<Account reference="Argent Bank Savings (x6712)" amount="$10,928.42" status="Available Balance" />
			<Account reference="Argent Bank Credit Card (x8349)" amount="$184.30" status="Current Balance" />
		</Main>
	);
}

const Main = styled.main`
	flex: 1;
	background-color: #12002b;
`;

const TopSection = styled.div`
	color: #fff;
	margin-bottom: 2rem;

	h1 {
		margin: 21px 0;
	}
`;
