import React from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';

import BlogDetails from '../../data/blogDetails1.json';
import BlogHeader from './components/blogHeader';
import BodyComponent from './components/blogBody';
import BlogFooter from './components/blogFooter';
import RecentPosts from './components/recentPosts';
import NoMatchPage from '../noMatch';
import { GoBackButton } from '../../utils/commonUtils';

const MainContainer = styled.div`
	border: solid #d1d1d1 thin;
	@media (max-width: 630px) {
		border: none;
	}
`;
const BlogContainer = styled.div`
	margin: 20px 70px 50px;
	@media (max-width: 630px) {
		margin: 0px;
	}
`;
const BackButtonContainer = styled.div`
	display: flex;
	flex-direction: row-reverse;
	margin: -15px 70px 10px;
	@media (max-width: 630px) {
		flex-direction: row;
		margin: -10px 0px -10px;
	}
`;

const BlogPosts = ({location:{state}}) => {
	const previousPath =  (state?.prevPath) ? true : false;
	const { slug } = useParams();
	const post = BlogDetails[slug];
	
	return (
		<>
		{post ? (
			<>
				<BackButtonContainer>
					<GoBackButton previousPath={previousPath} />
				</BackButtonContainer>
				<MainContainer>
					<BlogContainer>
						<BlogHeader post={post} />
						<BodyComponent slug={slug} />
						<BlogFooter url={new URL(post.linkto, window.location.origin)} />
					</BlogContainer>
				</MainContainer>
				<RecentPosts recent={post.recent} />
			</>
		) : (<NoMatchPage />)}
		</>
	)
}

export default BlogPosts;