import React from "react";
import styled from "styled-components";

export default function Button({ content }) {
	return <GreenButton>{content}</GreenButton>;
}

const GreenButton = styled.button`
	display: block;
	width: 100%;
	padding: 8px;
	font-size: 1.1rem;
	font-weight: bold;
	margin-top: 1rem;
	border: none;
	text-decoration: underline;
	cursor: pointer;
	border-color: #00bc77;
	background-color: #00bc77;
	color: #fff;
`;
