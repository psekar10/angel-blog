import React from 'react';
import styled from 'styled-components';

import { CustomLink } from '../utils/styles';
import noMatchImage from '../img/404.png';

const ImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const Image = styled.img`
	object-fit: cover;
	width: 100%;
	max-height: 100%;
	max-width: 100%;
`;
const Link = styled(CustomLink)`
	color: #D12500;
`;

const NoMatchPage = () => {
	return (
		<>
			<ImageContainer>
				<Image src={noMatchImage} />
				<p>This page does not exists. You can go back to the <Link to="/blog">HOME</Link> page</p>
			</ImageContainer>
		</>
	);
};

export default NoMatchPage;