import React from 'react';
import styled from 'styled-components';

import SocialMediaStrip from '../blogsSection/components/socialMediaStrip';
import { ParaCenter } from '../../utils/styles';
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
	right: -14px;
	top: -7px;
	background-color: white;
	border-color: red;
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
					<ParaCenter>Share the Post:</ParaCenter>
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