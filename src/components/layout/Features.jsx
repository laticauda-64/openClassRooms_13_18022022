import Tchat from "../../assets/img/icon-chat.png";
import Money from "../../assets/img/icon-money.png";
import Shield from "../../assets/img/icon-shield.png";
import styled from "styled-components";

export default function Features() {
	return (
		<Section>
			<Item>
				<Icon src={Tchat} alt="Chat Icon" className="feature-icon" />
				<Title>You are our #1 priority</Title>
				<p>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.</p>
			</Item>
			<Item>
				<Icon src={Money} alt="Chat Icon" className="feature-icon" />
				<Title>More savings means higher rates</Title>
				<p>The more you save with us, the higher your interest rate will be!</p>
			</Item>
			<Item>
				<Icon src={Shield} alt="Chat Icon" className="feature-icon" />
				<Title>Security you can trust</Title>
				<p>We use top of the line encryption to make sure your data and money is always safe.</p>
			</Item>
		</Section>
	);
}

const Section = styled.section`
	display: flex;
	flex-direction: column;

	@media (min-width: 920px) {
		flex-direction: row;
	}
`;

const Item = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2.5rem;

	p {
		margin: 16px 0;
	}
`;

const Icon = styled.img`
	width: 152px;
	border: 10px solid #00bc77;
	border-radius: 50%;
	padding: 1rem;
`;

const Title = styled.h3`
	color: #222;
	font-size: 1.25rem;
	font-weight: bold;
	margin-bottom: 0.5rem;
	margin: 20px 0 8px 0;
`;
