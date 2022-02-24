import styled from "styled-components";
import backgroundImg from "../assets/img/bankTree.jpeg";

export default function Home() {
	return (
		<Main>
			<Hero></Hero>
			<Section></Section>
		</Main>
	);
}

const Main = styled.main`
	background-color: aliceblue;
	flex: 1;
`;

const Hero = styled.div`
	background-image: url(${backgroundImg});
	background-position: 0 -50px;
	background-size: cover;
	background-repeat: no-repeat;
	height: 300px;
	position: relative;
`;

const Section = styled.section`g`;
