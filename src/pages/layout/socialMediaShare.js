import React, { useState } from 'react';

import Modal from './modal';
import ShareIcon from '../../svg/share-icon.svg';
import { ShareButton } from '../../utils/styles';

const SocialMediaShare = ({url}) => {
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
			<Modal show={modalState} handleClose={hideModal} url={socialMediaUrl} />
			<ShareButton onClick={() => showModal(url)}>
				<img src={ShareIcon} />
			</ShareButton>
		</>
	)
}

export default SocialMediaShare;