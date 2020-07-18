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

import CopyToClipboard from '../../../svg/copy-to-clipboard.svg';

const Image = styled.img`
	margin: 5px;
	width: 34px;
	cursor: pointer;
`;
const FacebookButton = styled(FacebookShareButton)`
	margin: 5px;
`;
const TwitterButton = styled(TwitterShareButton)`
	margin: 5px;
`;
const WhatsappButton = styled(WhatsappShareButton)`
	margin: 5px;
`;

const SocialMediaStrip = ({url}) => {
	const handleClick = (url) => {
    const dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = url;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
	}
	return (
		<>
			<FacebookButton
				url={url}
				quote="FB link">
				<FacebookIcon size={36} round={true} />
			</FacebookButton>
			<TwitterButton
				url={url}
				title="Twitter Link">
				<TwitterIcon size={36} round={true} />
			</TwitterButton>
			<WhatsappButton
				url={url}
				title="Whatsapp Link">
				<WhatsappIcon size={36} round={true} />
			</WhatsappButton>
			<Image onClick={() => handleClick(url)} src={CopyToClipboard} />
		</>
	)
};

export default SocialMediaStrip;