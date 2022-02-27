import styled from "styled-components";

export default function Button({ content, type }) {
	return <GreenButton type={type}>{content}</GreenButton>;
}

const GreenButton = styled.button`
	display: block;
	width: ${(props) => (props.type === "small" ? "auto" : "100%")};
	padding: 8px;
	font-size: ${(props) => (props.type === "small" ? "0.9rem" : "1.1rem")};
	font-weight: bold;
	margin-top: 1rem;
	border: ${(props) => (props.type === "small" ? "" : "none")};
	text-decoration: ${(props) => (props.type === "small" ? "none" : "underline")};
	cursor: pointer;
	border-color: #00bc77;
	background-color: #00bc77;
	color: #fff;
	margin: 0 auto;
`;
