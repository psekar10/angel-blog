import React, { useState } from 'react';

import Modal from './modal';
import ShareIcon from '../../svg/share-icon.svg';
import { ShareButton } from '../../utils/styles';

const SocialMediaShare = ({url, title}) => {
	const [modalState, setModalState] = useState(false);
	const [socialMediaUrl, setsocialMediaUrl] = useState('');
	const showModal = (url) => {
		setModalState(true)
		setsocialMediaUrl(url)
	}
  const hideModal = () => {
    setModalState(false)
	}
	return (
		<>
			<Modal show={modalState} handleClose={hideModal} url={socialMediaUrl} title={title} />
			<ShareButton onClick={() => showModal(url)}>
				<img src={ShareIcon} />
			</ShareButton>
		</>
	)
}

export default SocialMediaShare;