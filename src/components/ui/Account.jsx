import styled from "styled-components";
import Button from "./Button";

export default function Account({ reference, amount, status }) {
	return (
		<AccountBlock>
			<Wrapper>
				<Title>{reference}</Title>
				<Amount>{amount}</Amount>
				<Desc>{status}</Desc>
			</Wrapper>
			<WrapperCta>
				<TransactionButton>View Transaction</TransactionButton>
			</WrapperCta>
		</AccountBlock>
	);
}

const AccountBlock = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid black;
	background-color: #fff;
	width: 80%;
	margin: 0 auto;
	flex-direction: column;
	padding: 1.5rem;
	box-sizing: border-box;
	text-align: left;
	margin-bottom: 2rem;

	@media (min-width: 720px) {
		flex-direction: row;
	}
`;

const Wrapper = styled.div`
	width: 100%;
	flex: 1;
`;

const Title = styled.h3`
	margin: 0;
	padding: 0;
	font-size: 1rem;
	font-weight: normal;
`;
const Amount = styled.p`
	margin: 0;
	font-size: 2.5rem;
	font-weight: bold;
`;
const Desc = styled.p`
	margin: 0;
`;

const WrapperCta = styled(Wrapper)`
	@media (min-width: 720px) {
		flex: 0;
	}
`;

const TransactionButton = styled.button`
	@media (min-width: 720px) {
		width: 200px;
	}
	cursor: pointer;
	display: block;
	width: 100%;
	padding: 8px;
	font-size: 1.1rem;
	font-weight: bold;
	margin-top: 1rem;
	border-color: #00bc77;
	background-color: #00bc77;
	color: #fff;
`;
