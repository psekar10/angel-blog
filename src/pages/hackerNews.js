import React, { useState, useEffect} from 'react';
import styled from "styled-components";

import {CustomButton} from '../utils/styles';
import Spinner from '../svg/Spinner.svg';

/**
 * STYLES
 */
const Container = styled.div`
	margin: 30px;
`;
const NewsContainer = styled.div`
	display:flex;
	border-style: solid;
	background: #fcf3f2;
	margin-bottom:10px;
	border-radius: 10px;
	padding-left: 20px;
`;
const Heading1 = styled.h1`
	display:flex;
	margin-bottom:10px;
	color:red;
	text-shadow: 1px 2px 2px #D12500;
`;
const Para = styled.p`
	font-family: nyt-imperial;
`;
/**
 * LAYOUT
 */
const Layout = ({posts}) => {
	return (
	posts.map(({title, url}) => (
		<a href={url} target="_blank" rel="noopener noreferrer">
			<NewsContainer>
				<Para>{title}</Para>
			</NewsContainer>
		</a>
	))
)}

const HackerNews = () => {
	const [posts, setPosts] = useState([]);
	const [blogPosts, setblogPosts] = useState([]);
	const [isLoading, setLoading] = useState(true);
	// FETCH CALL
	async function slicedNews(event) {
		event.preventDefault();
		setLoading(true)
		const promises1 = posts
		.slice(blogPosts.length, blogPosts.length+10)
		.map(id =>
			fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
				response => response.json()
			)
		);
		const result1 = await Promise.all(promises1);
		setblogPosts(blogPosts => [...blogPosts, ...result1]);
		setLoading(false)
	}
	async function getTopStories() {
		const url = "https://hacker-news.firebaseio.com/v0/topstories.json";
		try {
			setLoading(true)
			const response = await fetch(url);
			if (response.ok === false) {
				throw new Error("Response Error:" + response.text);
			}
			const json = await response.json();
			const promises = json
			.slice(blogPosts.length, blogPosts.length+10)
			.map(id =>
				fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
					response => response.json()
				)
			);
			const result = await Promise.all(promises);
			setblogPosts(blogPosts => blogPosts.concat(result));
			setPosts(json);
			setLoading(false)
			// const re = blogPosts.concat(result);
			// return re;
		} catch (err) {
			console.error(err);
		}
	}
	// const res = useMemo(getTopStories, []);
	// res.then(res1 => console.log('res1', res1 ))
	//useMemo(getTopStories, [])
	useEffect(() => {
    	getTopStories();
	}, []);

	return (
		<Container>
			<Heading1>HACKER NEWS</Heading1>
			{isLoading ? (
				<img src={Spinner} />
			) : (
			<>
				<Layout posts={blogPosts} />
				<CustomButton onClick={slicedNews}>LOAD MORE</CustomButton>
			</>
			)}

		</Container>
	)
}

export default HackerNews;