import React from 'react';
import styled from 'styled-components';
import FbSvg from '../svg/footer-fb.svg';
import InstaSvg from '../svg/footer-insta.svg';
import TwitterSvg from '../svg/footer-twitter.svg';
import YTSvg from '../svg/footer-youtube.svg';

const FooterContainer = styled.div`
	background-color: #D12500;
`;
const FooterRowContainer = styled.div`
	display: flex;
  align-items: center;
	justify-content: center;
`;
const SocialMediaImage = styled.img`
	margin: 30px 10px;
	width: 30px;
`;
const FooterPara = styled.p`
	font-family: Georgia, serif;
`;

const Footer = () => {
	return (
		<FooterContainer>
			<FooterRowContainer>
				<SocialMediaImage src={FbSvg}/>
				<SocialMediaImage src={TwitterSvg}/>
				<SocialMediaImage src={InstaSvg}/>
				<SocialMediaImage src={YTSvg}/>
			</FooterRowContainer>
			<FooterRowContainer>
				<FooterPara>© 2020 THE ANGEL</FooterPara>
			</FooterRowContainer>
		</FooterContainer>
	)
};

export default Footer;