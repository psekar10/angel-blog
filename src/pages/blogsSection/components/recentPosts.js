import React from 'react';
import styled from 'styled-components';

import { CustomLink } from '../../../utils/styles';
import BlogDetails from '../../../data/blogDetails1.json';
import BlogPostLayout from '../../layout/blogPostLayout';

const RecentBlogWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(0px, 1fr));
	gap: 20px;
	@media (max-width: 900px) {
		grid-template-columns: repeat(2, minmax(0px, 1fr));
	}
	@media (max-width: 650px) {
		grid-template-columns: repeat(1, minmax(0px, 1fr));
	}
`;
const FirstRowWrapper = styled.div`
	display: flex;
	margin: 10px 0px;
	justify-content: space-between;
`;

const RecentPosts = ({recent}) => (
	<>
		<FirstRowWrapper>
			<h3>Recent Posts</h3>
			<CustomLink key="1" to="/blog">
				<p>See All</p>
			</CustomLink>
		</FirstRowWrapper>
		<RecentBlogWrapper>
			{
				recent.map(post => (
					<BlogPostLayout 
						key={BlogDetails[post].linkto}
						linkto={BlogDetails[post].linkto} 
						attributes={BlogDetails[post]} 
						recentPost={true} 
						layout="WrappedAround" 
					/>
				))
			}
		</RecentBlogWrapper>
	</>
);

export default RecentPosts;