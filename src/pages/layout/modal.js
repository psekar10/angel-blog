import React from 'react';
import styled from 'styled-components';

import SocialMediaStrip from '../blogsSection/components/socialMediaStrip';
import { Heading2 } from '../../utils/styles';
import Close from '../../svg/close-icon.svg';

const ModalMain = styled.section`
	position:fixed;
	background: white;
	padding:10px;
	height: auto;
	top:50%;
	left:50%;
	border-radius:25px;
	transform: translate(-50%,-50%);
`;
const CloseImage = styled.img`
	background-color: transparent;
	width: 15px;

`;
const Button = styled.button`
	position: absolute;
	right: 9px;
	top: 6px;
	background-color: white;
	border-color: grey;
	border-radius: 15px;
`;
const ShareTopTierContainer = styled.div`
	display:flex;
`;
const SocialButtonContainer = styled.div`
	display:flex;
	justify-content: center;
	align-items: center;
`;

const Modal = ({show, handleClose, url}) => {
	const modalDisplay = show ? "block" : "none";
	const ModalContainer = styled.div`
		position: fixed;
		top: 0;
		left: 0;
		width:100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		display: ${modalDisplay};
	`;

	return (
		<ModalContainer>
			<ModalMain>
				<ShareTopTierContainer>
					<h3>Share the Post:</h3>
					<Button onClick={handleClose}><CloseImage src={Close} /></Button>
				</ShareTopTierContainer>
				<SocialButtonContainer>
					<SocialMediaStrip url={url}/>
				</SocialButtonContainer>
				</ModalMain>
		</ModalContainer>
	)
}

export default Modal;