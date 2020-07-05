import React from 'react';
import styled from 'styled-components';
import {img1, img2, img3, img4, img5, img6, images} from '../../img/images';
import { Heading2} from '../../utils/styles';
console.log('img1', img1);
console.log('img2', img2);
console.log('img3', img3);
console.log('img4', img4);
console.log('img5', img5);
console.log('img6', img6);
const MainContainer = styled.div`
	display:grid;
	grid-gap: 30px;
	margin: 50px 250px;
	@media (max-width: 930px) {
		margin: 50px 100px;
	}
	@media (max-width: 630px) {
		margin: 50px 55px;
	}
`;
const Image = styled.img`
	object-fit: cover;
	width: 100%;
	max-height: 100%;
	max-width: 100%;
`;
const Col1Box = styled.div`
	display: grid;
	grid-template-rows: 350px;
	border: solid black thin;
`;
const FirstBlogWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(250px, 1fr));
	grid-template-rows: 370px;
	@media (max-width: 720px) {
		grid-template-columns: repeat(1, minmax(250px, 1fr));
	}
`;
const FirstBlogLayout2Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(250px, 1fr));
	grid-template-rows: 370px;
	@media (max-width: 720px) {
		grid-template-columns: repeat(1, minmax(250px, 1fr));
	}
`;
const BodyFirstRowWrapper = styled.div`
	display:flex;
	justify-content: space-between;
`;
const HeadAndBodyConatainer = styled.div`
	margin:10px;
`;

const TwoSideLayoutImageFirst = ({img}) => {
	return (
		<FirstBlogWrapper>
			<Col1Box>
				<Image src={img} />
			</Col1Box>
			<Col1Box>
				<HeadAndBodyConatainer>
					<BodyFirstRowWrapper>
						<Heading2>Heading 1</Heading2>
					</BodyFirstRowWrapper>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
				</HeadAndBodyConatainer>
			</Col1Box>
		</FirstBlogWrapper>
	);
}
const TwoSideLayoutImageSecond = ({img}) => {
	return (
		<FirstBlogLayout2Wrapper>
			<Col1Box>
				<HeadAndBodyConatainer>
					<BodyFirstRowWrapper>
						<Heading2>Heading 1</Heading2>
					</BodyFirstRowWrapper>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
				</HeadAndBodyConatainer>
			</Col1Box>
			<Col1Box>
				<Image src={img} />
			</Col1Box>
		</FirstBlogLayout2Wrapper>
	);
}

const BlogStyle1 = () => {
	console.log('images1', images);
	return (
		<MainContainer>
			{images.map(({firstLayout, url}) => (
				firstLayout ? <TwoSideLayoutImageFirst img={url} /> : <TwoSideLayoutImageSecond img={url} />
			))}
		</MainContainer>
	)
}

export default BlogStyle1;