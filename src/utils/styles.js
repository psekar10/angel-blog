import styled from "styled-components";
import { Link } from 'react-router-dom';

/**
 * 
 * Heading and Paragraph Tag Styling
 * 
 */

export const ParaCenter = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: Georgia, serif;
`;
export const Heading2 = styled.h2`
	font-family: Georgia, serif;
	&:hover,
	&:active {
		color: #D12500;
	}
`;
export const Heading1 = styled.h1`
	font-family: Georgia, serif;
	&:hover,
	&:active {
		color: #D12500;
	}
`;

/**
 * 
 * Blog Picture Card Styles
 * 
 */
export const BlogParagraph = styled.p`
	&:hover,
	&:active {
		color: #D12500;
	}
`;
export const BodyFirstRowWrapper = styled.div`
	display:flex;
	justify-content: space-between;
	margin: 0 0 -10px;
`;
export const CustomLink = styled(Link)`
	text-decoration:none;
	color: black;
`;
export const Col1Box = styled.div`
	display: grid;
	grid-template-rows: 370px;
	border: solid black thin;
	border-radius: 20px;
	@media (max-width: 630px) {
		grid-template-rows: 300px;
	}
`;
export const RecentColBox = styled.div`
	display: grid;
	grid-template-rows: 250px;
	border: solid black thin;
	border-radius: 20px;
`;
export const Image = styled.img`
	object-fit: cover;
	width: 100%;
	height: 100%;
	max-height: 100%;
	max-width: 100%;
	border-radius: 20px;
`;

/**
 * 
 * Custom Button Styles
 * 
 */

export const CustomButton = styled.button`
	padding: 15px;
	background: transparent;
	border-color: rgb(209, 37, 0);
	color: #D12500;
	font-size: 1em;
	border-radius: 20px;
	&:hover,
	&:active {
		cursor: pointer;
		background: #D12500;
		color: white;
		box-shadow: 1px 4px 7px grey;
	}
`;
export const DynamicButton = styled.button`
	padding: 15px;
	background: transparent;
	border-color: rgb(209, 37, 0);
	color: #D12500;
	font-size: 1em;
	font-weight: 600;
	border-radius: 20px;
	&:hover,
	&:active {
		cursor: pointer;
		background: #D12500;
		color: white;
		box-shadow: 1px 4px 7px grey;
	}
	@media (max-width: 720px) {
		width: 100%
	}
`;
export const ShareButton = styled.button`
	background-color:transparent;
	border-style: initial;
	border-width: 0px;
	&:hover,
	&:active {
		cursor: pointer;
	}
`;