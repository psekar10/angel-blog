import React from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import NavMenuLinks from '../data/navMenuLinks.json';

const MainContainer = styled.div`
	background-color: #fff266;
`;
const ListUL = styled.ul`
	list-style: none;
`;
const ListLI = styled.li`
	padding:10px;
	color:black;
`;
const ListLink = styled(Link)`
	text-decoration:none;
	color:black;
	font-family: Georgia, serif;
`;

const HamburgerPage = () => {
	const modelStatus = useSelector(state => state.common.modelStatus);
	const Lists = Object.entries(NavMenuLinks).map(([name, link]) => {
    return (
      <ListLI>
        <ListLink key={link} to={link}>  
          {name}
        </ListLink>
      </ListLI>
    )
	});
	return (
		<MainContainer> 
			{modelStatus && (
				<ListUL>
					{Lists}
				</ListUL>
			)}
		</MainContainer>
)};

export default HamburgerPage