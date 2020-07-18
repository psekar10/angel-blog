import React, {useEffect, useState} from 'react';
import { Link, useHistory, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import Logo from '../instagram.svg';
import Hamburger from '../svg/hamburger-icon.svg';
import Close from '../svg/close-icon.svg';
import { getCommonStates } from '../actions/getpokemon';
import NavMenuLinks from '../data/navMenuLinks.json';

const MobileHeaderContainer = styled.nav`
	display: flex;
	justify-content: center;
	background-color: #D12500;
	padding: 20px;
	@media (max-width: 570px), (max-height: 500px) {
		justify-content: space-between;
	}
`;
const HeaderContainer = styled.nav`
	display: flex;
	justify-content: center;
	background-color: white;
	padding: 20px;
`;
const ListUL = styled.ul`
	display: flex;
	list-style: none;
`;
const ListLI = styled.li`
	padding-right:10px;
	margin-right:20px;
`;
const ListLink = styled(NavLink)`
	text-decoration:none;
	color:#D12500;
	font-family: Georgia, serif;
	&:hover,
	&:focus,
	&:active {
		color: #660000;
	}
`;
const LogoLink = styled(Link)`
	text-decoration:none;
`;
const HamBurgerButton = styled.button`
	background-color:transparent;
	border-style: initial;
	border-width: 0px;
	&:hover,
	&:active {
		cursor: pointer;
	}
`;
const HamburgerImage = styled.img`
	width:35px;
	height:35px;
`;
const CloseImage = styled.img`
	width:30px;
	height:50px;
`;
const MainLogo = styled.img`
	display:flex;
	justify-content: center;
	align-items: center;
	width:40px;
	height:50px;
	margin-left:20px;
`;
const TitleLogoHeading = styled.h2`
	font: 40px 'Berkshire Swash', Helvetica, sans-serif;
	color: #2b2b2b;
	text-shadow: 1px 1px 0px #ededed, 4px 4px 0px rgba(0,0,0,0.15);
	margin: 10px;
	text-decoration:none;
`;

const Header = () => {
	const smallScreen = window.matchMedia("(max-width: 600px), (max-height: 500px)").matches;
	const [smallHeader, setSmallHeader] = useState(smallScreen);
	const [isModalOpen, setModalOpen] = useState(false);
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		setSmallHeader(smallHeader);
	}, [smallHeader]);
	useEffect(() => {
		dispatch(getCommonStates(isModalOpen));
	}, [isModalOpen])
	useEffect(() => {
		const unlisten = history.listen(() => {
			setModalOpen(false);
		});

		return unlisten;
	}, [history]);
  
	const Lists = Object.entries(NavMenuLinks).map(([name, link]) => {
		return (
			<ListLI key={name}>
				<ListLink key={name} to={link}>  
					{name}
				</ListLink>
			</ListLI>
		)
	});
	const handleClick = () => {
		if (isModalOpen) {
			setModalOpen(false)
		} else {
			setModalOpen(true)
		}
	}
	return (
		<>
			{!smallHeader && (
				<HeaderContainer>
					<ListUL>
						{Lists}
					</ListUL>
				</HeaderContainer>
			)}
			<MobileHeaderContainer>
				<LogoLink key="1" to="/blog">
					<TitleLogoHeading>The Angels</TitleLogoHeading>
				</LogoLink>
				<HamBurgerButton onClick={handleClick}>
					{smallHeader ? !isModalOpen ? <HamburgerImage src={Hamburger} /> : <CloseImage src={Close} /> : null}
				</HamBurgerButton>
			</MobileHeaderContainer>
		</>
	)
};

export default Header;