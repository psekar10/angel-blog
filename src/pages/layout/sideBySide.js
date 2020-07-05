import React from 'react'

import SocialMediaShare from './socialMediaShare';
import { 
	Heading2, 
	BlogParagraph, 
	HeadAndBodyConatainer, 
	BodyFirstRowWrapper, 
	CustomLink,
	Col1Box,
	Image
} from '../../utils/styles';

const SideBySide = ({attributes, linkto}) => {
	const { description, heading, img } = attributes;
	const url = new URL(attributes.linkto, window.location.origin);

	return (
		<>
		<Col1Box>
			<CustomLink key={linkto} to={linkto}>
				<Image src={img} />
			</CustomLink>
		</Col1Box>
		<Col1Box>
			<HeadAndBodyConatainer>
				<BodyFirstRowWrapper>
					<CustomLink key={linkto} to={linkto}>
						<Heading2>{heading}</Heading2>	
					</CustomLink>
					<SocialMediaShare url={url} />
				</BodyFirstRowWrapper>
				<CustomLink key={linkto} to={linkto}>
					<BlogParagraph>{description}</BlogParagraph>
				</CustomLink>
			</HeadAndBodyConatainer>
		</Col1Box>
		</>
	)
}

export default SideBySide;