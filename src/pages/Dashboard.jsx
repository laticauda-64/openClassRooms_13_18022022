import styled from "styled-components";
import Button from "../components/ui/Button";
import Account from "../components/ui/Account";

export default function Dashboard() {
	return (
		<Main>
			<TopSection>
				<h1>
					Welcome back
					<br />
					Tony Jarvis!
				</h1>
				<Button content="Edit Name" type="small" />
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
