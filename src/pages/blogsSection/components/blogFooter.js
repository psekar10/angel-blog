import React from 'react';
import styled from 'styled-components';

import SocialMediaStrip from './socialMediaStrip';
import { TopButton } from '../../../utils/commonUtils';

const BlogFooterContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
const SocialButtonContainer = styled.div`
	display:flex;
`;

const BlogFooter = ({url, title}) => {
	return (
		<BlogFooterContainer>
			<SocialButtonContainer>
				<SocialMediaStrip url={url} title={title} />
			</SocialButtonContainer>
			<TopButton />
		</BlogFooterContainer>
	)
}

export default BlogFooter;