import React, {useState, useEffect, useCallback} from 'react';
import styled from 'styled-components';

import { Heading1, DynamicButton } from '../utils/styles';
import BlogPostLayout from './layout/blogPostLayout';
import BlogDetails from '../data/blogDetails1.json';
import BlogDetails1 from '../data/blogDetails.json';
import { compose } from 'redux';

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
const ListUL = styled.ul`
	display: flex;
	list-style: none;
	@media (max-width: 720px) {
		align-items: center;
		justify-content: center;
	}
`;
const ListLI = styled.li`
	color: #D12500;
	padding-right: 30px;
	font-family: Georgia, serif;
	&:hover,
	&:focus,
	&:active {
		cursor: pointer;
		color: #660000;
	}
`;

const FilterSection = ({onhandclick}) => (
	<FilterContainer>
		<ListUL onClick={onhandclick}>
			<ListLI name="">ALL</ListLI>
			<ListLI name="angel">ANGEL</ListLI>
			<ListLI name="demon">DEMON</ListLI>
		</ListUL>
	</FilterContainer>
);

const Blog = () => {
	const smallScreen = window.matchMedia("(max-width: 600px), (max-height: 500px)").matches;
	const [mainBlogPosts, setmainBlogPosts ] = useState({});
	const [refBlogPosts, setrefBlogPosts ] = useState({});
	const [testBlogsPost, setTestBlogsPost ] = useState([]);
	const [start, setStart] = useState(0);
	//const currentListedBlogs = Object.keys(mainBlogPosts).length;
	const currentListedBlogs = testBlogsPost.length;
	const totalListedBlogs = Object.keys(BlogDetails).length;
	const isLoadMoreNeeded = testBlogsPost.length < BlogDetails1.length;

	// const slicedBlogPosts = () => {
	// 	let slicedFourBlogs = Object.keys(BlogDetails).slice(start, start + 4).reduce((result, key) => {
	// 		result[key] = BlogDetails[key];
	// 		return result;
	// 	}, {});

	// 	return slicedFourBlogs;
	// };
	// const filterObject = (obj, filter, filterValue) => 
	// 	Object.keys(obj).reduce((acc, val) => 
	// 	(obj[val][filter] !== filterValue ? acc : {
	// 		...acc,
	// 		[val]: obj[val]
	// 	}                                        
	// 	),
	// {});

	const handleFilter = e => {
	//	const filteredBlogPost = filterObject(refBlogPosts, "filterOptions", e.target.getAttribute('name'));
//		(Object.keys(filteredBlogPost).length === 0) ? setmainBlogPosts(refBlogPosts) : setmainBlogPosts(filteredBlogPost);
	}
	// const handleLoadMore = () => {
	// 	setStart(start+4)
	// }

	// useEffect(() => {
	// 	let slicedPosts = slicedBlogPosts();
	// 	let finalCombinedBlogPosts = {...refBlogPosts, ...slicedPosts};
	// 	setmainBlogPosts(finalCombinedBlogPosts);
	// 	setrefBlogPosts(finalCombinedBlogPosts);
	// }, [start]);

	// //console.log('BlogDetails1',BlogDetails1)
	const loadBlogs = useCallback(({start}) => {
		let blogAllowedItems = 4;
		const slicedBlogs = BlogDetails1.slice(start, start + blogAllowedItems)
		setTestBlogsPost(testBlogsPost => testBlogsPost.concat(slicedBlogs));
	},[]);
	useEffect(() => {
		loadBlogs({start : 0});
		return () => {
			setTestBlogsPost([]);
		}
	}, [loadBlogs]);
	console.log('testBlogsPost', testBlogsPost);
	return (
		<>
			{currentListedBlogs !== 0 && (
				<>
					<FilterSection onhandclick={handleFilter} />
					{!smallScreen && (
						<>
							<FirstBlogWrapper>
								<BlogPostLayout 
									attributes={testBlogsPost[0]} 
									linkto={testBlogsPost[0].linkto} 
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
							testBlogsPost.map(blogs => (
								<BlogPostLayout 
									key={blogs.linkto} 
									attributes={blogs} 
									linkto={blogs.linkto} 
									layout="WrappedAround" 
								/>
							))
							// Object.entries(mainBlogPosts).map(([, values]) => (
							// 	<BlogPostLayout 
							// 		key={values.linkto} 
							// 		attributes={values} 
							// 		linkto={values.linkto} 
							// 		layout="WrappedAround" 
							// 	/>
							// ))
						}
					</BlogsWrapper>
					<p><i>Showing {testBlogsPost.length} of {BlogDetails1.length}</i></p>
					{isLoadMoreNeeded && (
						<>
							{/* <LoadMoreButtonContainer>
								<DynamicButton onClick={handleLoadMore}>LOAD MORE</DynamicButton>
							</LoadMoreButtonContainer> */}
							<LoadMoreButtonContainer>
								<DynamicButton 
									onClick={() => loadBlogs({start: testBlogsPost.length})}
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