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
	const { author, createtime, description, heading, img} = attributes;
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
				<p style={{margin: 2, padding: 0, color: "#D12500"}}>{author}</p>
				<p style={{margin: 2, padding: 0, fontSize: "0.9rem"}}>{createtime}</p>
				<CustomLink key={linkto} to={linkto}>
					<BlogParagraph>{description}</BlogParagraph>
				</CustomLink>
			</HeadAndBodyConatainer>
		</Col1Box>
		</>
	)
}

export default SideBySide;