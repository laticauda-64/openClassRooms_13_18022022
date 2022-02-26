import styled from "styled-components";
import Hero from "../components/layout/Hero";
import Features from "../components/layout/Features";

export default function Home() {
	return (
		<Main>
			<Hero />
			<Features />
		</Main>
	);
}

const Main = styled.main`
	flex: 1;
`;
