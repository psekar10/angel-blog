import React from 'react';
import styled from 'styled-components';
import {
	FacebookShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	FacebookIcon,
	TwitterIcon,
	WhatsappIcon
} from 'react-share';

const FacebookButton = styled(FacebookShareButton)`
	margin: 5px;
`;
const TwitterButton = styled(TwitterShareButton)`
	margin: 5px;
`;
const WhatsappButton = styled(WhatsappShareButton)`
	margin: 5px;
`;

const SocialMediaStrip = ({url}) => (
	<>
		<FacebookButton
			url={url}
			quote="FB link">
			<FacebookIcon size={32} round={true} />
		</FacebookButton>
		<TwitterButton
			url={url}
			title="Twitter Link">
			<TwitterIcon size={32} round={true} />
		</TwitterButton>
		<WhatsappButton
			url={url}
			title="Whatsapp Link">
			<WhatsappIcon size={32} round={true} />
		</WhatsappButton>
	</>
);

export default SocialMediaStrip;