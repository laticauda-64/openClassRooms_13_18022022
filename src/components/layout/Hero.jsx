import styled from "styled-components";
import backgroundImg from "../../assets/img/bankTree.jpeg";

export default function Hero() {
	return (
		<HeroSection>
			<Content>
				<p className="subtitle">No fees.</p>
				<p className="subtitle">No minimum deposit.</p>
				<p className="subtitle">High interest rates.</p>
				<p className="text">Open a savings account with Argent Bank today!</p>
			</Content>
		</HeroSection>
	);
}

const HeroSection = styled.section`
	background-image: url(${backgroundImg});
	background-position: 0 -50px;
	background-size: cover;
	background-repeat: no-repeat;
	height: 300px;
	position: relative;

	.subtitle {
		font-weight: bold;
		font-size: 1rem;
		margin: 0;
	}

	.text {
		margin-bottom: 0;
		margin-top: 19.2px;
		font-size: 0.9rem;
	}

	@media (min-width: 920px) {
		height: 400px;
		background-position: 0% 33%;
	}
`;

const Content = styled.div`
	position: relative;
	top: 2rem;
	width: 264px;
	background: white;
	padding: 2rem;
	text-align: left;
	margin: 0 auto;

	@media (min-width: 920px) {
		position: absolute;
		top: 50px;
		right: 50px;
		width: 364px;
		margin: 2rem;

		.subtitle {
			font-size: 1.5rem;
		}

		.text {
			font-size: 1.2rem;
		}
	}
`;
