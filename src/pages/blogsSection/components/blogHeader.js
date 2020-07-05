import React from 'react';
import styled from 'styled-components';

import SocialMediaShare from '../../layout/socialMediaShare';
import { Heading2 } from '../../../utils/styles';

const FirstRowWrapper = styled.div`
	display:flex;
	justify-content:space-between
`;
const Heading4 = styled.h4`
	color: #676c73;
	font-family: Georgia, serif;
	font-size: 15px;
`;

const BlogHeader = ({post}) => {
	const {author, createtime, readtime, heading, linkto} = post;
	const url = new URL(linkto, window.location.origin);
	
	return (
		<>
			<FirstRowWrapper>
				<Heading4>{author} | {createtime} | {readtime} min read</Heading4>
				<SocialMediaShare url={url} />
			</FirstRowWrapper>
			<Heading2>{heading}</Heading2>
		</>
);
}

export default BlogHeader;