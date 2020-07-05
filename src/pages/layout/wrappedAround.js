import React from 'react';

import SocialMediaShare from './socialMediaShare';
import { 
	Heading2, 
	BlogParagraph, 
	HeadAndBodyConatainer, 
	BodyFirstRowWrapper, 
	CustomLink,
	Col1Box,
	RecentColBox,
	Image
} from '../../utils/styles';

const WrappedAround = ({attributes, linkto, recentPost=false}) => {
	const ColumnBoxWrapper = recentPost ?  RecentColBox : Col1Box;
	const { description, heading, img} = attributes;
	const url = new URL(attributes.linkto, window.location.origin);

	return (
		<ColumnBoxWrapper>
			<CustomLink key={url} to={linkto}>
				<Image src={img} />
			</CustomLink>
			<HeadAndBodyConatainer>
				<BodyFirstRowWrapper>
					<CustomLink key={url} to={linkto}>
						<Heading2>{heading}</Heading2>	
					</CustomLink>
					<SocialMediaShare url={url} />
				</BodyFirstRowWrapper>
				<CustomLink key={url} to={linkto}>
					<BlogParagraph>{description}</BlogParagraph>
				</CustomLink>
			</HeadAndBodyConatainer>
		</ColumnBoxWrapper>
	);	
}

export default WrappedAround;