import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import {CustomButton} from './styles';


export const TopButton = () => {
	const handleToTop = () => {
		window.scroll({top: 0, left: 0, behavior: 'smooth' })
	}
	return (
		<CustomButton onClick={handleToTop}>TOP</CustomButton>
	)
}

export const ScrollToTop = () => {
	const history = useHistory();
	useEffect(() => {
		const unlisten = history.listen(() => {
			window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
		});
		return () => {
			unlisten();
		}
	}, []);
	return (null);
}

export const GoBackButton = ({previousPath}) => {
	const Para = styled.p`
		color: #D12500;
		font-family: Georgia, serif;
		&:hover,
		&:focus,
		&:active {
			cursor: pointer;
			color: #660000;
		}
	`;
	const historyProps = useHistory();
	const handleBack = () => {
		if (previousPath) {
			historyProps.goBack();
		} else {
			historyProps.push("/blog");
		}
	}

	return (
		<Para onClick={handleBack}>Back</Para>
	)
}