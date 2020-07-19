import React, {useState, useEffect, useCallback} from 'react';
import { Link, useParams } from "react-router-dom";
import styled from 'styled-components';

import { Heading1, DynamicButton } from '../utils/styles';
import BlogPostLayout from './layout/blogPostLayout';
import BlogDetails from '../data/blogDetails.json';

const Blog = () => {
	const { slug } = useParams();
	const smallScreen = window.matchMedia("(max-width: 600px), (max-height: 500px)").matches;
	const [mainBlogPosts, setmainBlogPosts ] = useState([]);
	const [refBlogPosts, setrefBlogPosts ] = useState(null);
	const CurrentBlogLength = mainBlogPosts.length;
	const isLoadMoreNeeded = CurrentBlogLength < refBlogPosts;

	const FilterSection = () => (
		<FilterContainer>
			<FilterLink key="1" to="/">ALL</FilterLink>
			<FilterLink key="2" to="/blog/angel">ANGEL</FilterLink>
			<FilterLink key="3" to="/blog/demon">DEMON</FilterLink>
		</FilterContainer>
	);

	const loadBlogs = useCallback(({start, slug}) => {
		let BlogLists;
		if (slug && typeof slug !== "undefined") {
			BlogLists = BlogDetails.filter(blog1 => {
				return blog1.filterOptions === slug;
			});
		} else {
			BlogLists = BlogDetails;
		}
		const slicedBlogs = BlogLists.slice(start, start + 4);
		setmainBlogPosts(mainBlogPosts => mainBlogPosts.concat(slicedBlogs));
		setrefBlogPosts(BlogLists.length);
	},[]);

	useEffect(() => {
		loadBlogs({start : 0, slug});
		return () => {
			setmainBlogPosts([]);
			setrefBlogPosts(null)
		}
	}, [loadBlogs, slug]);

	return (
		<>
			{CurrentBlogLength !== 0 && (
				<>
					<FilterSection />
					{!smallScreen && (
						<>
							<FirstBlogWrapper>
								<BlogPostLayout 
									attributes={mainBlogPosts[0]} 
									linkto={mainBlogPosts[0].linkto} 
									layout="SideBySide" 
								/>
							</FirstBlogWrapper>
							<HeadingContainer>
								<Heading1>Blog Posts</Heading1>
							</HeadingContainer>
						</>
					)}
					<BlogsWrapper>
						{
							mainBlogPosts.map(blogs => (
								<BlogPostLayout 
									key={blogs.linkto} 
									attributes={blogs} 
									linkto={blogs.linkto} 
									layout="WrappedAround" 
								/>
							))
						}
					</BlogsWrapper>
					<p><i>Showing {CurrentBlogLength} of {refBlogPosts}</i></p>
					{isLoadMoreNeeded && (
						<>
							<LoadMoreButtonContainer>
								<DynamicButton 
									onClick={() => loadBlogs({start: CurrentBlogLength, slug})}
								>
									LOAD MORE
								</DynamicButton>
							</LoadMoreButtonContainer>
						</>
					)}
				</>
			)}
		</>
	);
}

export default Blog;

const FirstBlogWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(250px, 1fr));
	grid-template-rows: 370px;
	@media (max-width: 720px) {
		grid-template-columns: repeat(1, minmax(250px, 1fr));
		grid-template-rows: 300px;
	}
`;
const BlogsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(250px, 1fr));
	gap: 20px;
	@media (max-width: 720px) {
		grid-template-columns: repeat(1, minmax(250px, 1fr));
	}
`;
const LoadMoreButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px 0 0;s
`;
const HeadingContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
const FilterContainer = styled.div`
	display: flex;
	margin: 0px 0px 30px;
	@media (max-width: 720px) {
		margin: 0px 0px 20px;
		justify-content: center;
		align-items: center;
	}
`;
const FilterLink = styled(Link)`
	color: #D12500;
	padding-right: 30px;
	font-family: Georgia, serif;
	text-decoration:none;
	&:hover,
	&:focus,
	&:active {
		cursor: pointer;
		color: #660000;
	}
`;
