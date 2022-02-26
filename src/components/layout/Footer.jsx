import styled from "styled-components";

export default function Footer() {
	return (
		<FooterBloc>
			<p>Copyright 2020 Argent Bank</p>
		</FooterBloc>
	);
}

const FooterBloc = styled.footer`
	display: flex;
	justify-content: center;
	border-top: 2px solid #ccc;
	padding: 2rem 0 1.5rem;
`;
