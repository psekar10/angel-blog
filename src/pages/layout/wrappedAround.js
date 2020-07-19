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
	const { author, createtime, description, heading, img} = attributes;
	const url = new URL(attributes.linkto, window.location.origin);

	return (
		<ColumnBoxWrapper>
			<CustomLink key={url} to={linkto}>
				<Image src={img} />
			</CustomLink>
			<div style={{margin:"15px"}}>
				<BodyFirstRowWrapper>
					<CustomLink key={url} to={linkto}>
						<Heading2>{heading}</Heading2>	
					</CustomLink>
					<SocialMediaShare url={url} title={heading} />
				</BodyFirstRowWrapper>
				<p style={{margin: 2, padding: 0, color: "#D12500"}}>{author}</p>
				<p style={{margin: 2, padding: 0, fontSize: "0.9rem"}}>{createtime}</p>
				<CustomLink key={url} to={linkto}>
					<BlogParagraph>{description}</BlogParagraph>
				</CustomLink>
			</div>
		</ColumnBoxWrapper>
	);	
}

export default WrappedAround;