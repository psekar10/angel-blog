import React, {useState} from 'react';
import styled from 'styled-components';

import { Heading1 } from '../utils/styles';
import BlogPostLayout from './layout/blogPostLayout';
import BlogDetails from '../data/blogDetails1.json';

const FirstBlogWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(250px, 1fr));
	grid-template-rows: 370px;
	gap: 20px;
	@media (max-width: 720px) {
		grid-template-columns: repeat(1, minmax(250px, 1fr));
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
	const [blogPosts, setBlog ] = useState(BlogDetails)
	const filterObject = (obj, filter, filterValue) => 
	Object.keys(obj).reduce((acc, val) => 
		(obj[val][filter] !== filterValue ? acc : {
			...acc,
			[val]: obj[val]
		}                                        
	), {});
	const handleClick = (e) => {
		const filteredBlogPost = filterObject(BlogDetails, "filterOptions", e.target.getAttribute('name'));
		(Object.keys(filteredBlogPost).length === 0) ? setBlog(BlogDetails) : setBlog(filteredBlogPost);
	}

	return (
		<>
			<FilterSection onhandclick={handleClick} />
			<FirstBlogWrapper>
				<BlogPostLayout 
					attributes={blogPosts[Object.keys(blogPosts)[0]]} 
					linkto={blogPosts[Object.keys(blogPosts)[0]].linkto} 
					layout="SideBySide" 
				/>
			</FirstBlogWrapper>
			<HeadingContainer>
				<Heading1>Blog Posts</Heading1>
			</HeadingContainer>
			<BlogsWrapper>
				{
					Object.entries(blogPosts).map(([, values]) => (
						<BlogPostLayout 
							key={values.linkto} 
							attributes={values} 
							linkto={values.linkto} 
							layout="WrappedAround" 
						/>
					))
				}
			</BlogsWrapper>
		</>
	);
}

export default Blog;