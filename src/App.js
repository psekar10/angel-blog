import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { BrowserRouter as Router,Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { ScrollToTop } from './utils/commonUtils';
import {getpokemon} from './actions/getpokemon';
import About from './pages/about';
import HackerNews from './pages/hackerNews';
import HamburgerPage from './pages/hamburgerSlidePage';
import Header from './pages/header';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Footer from './pages/footer';
import NoMatchPage from './pages/noMatch';
import Pokemon from './pages/pokemon';
import BlogStyle1 from './pages/layout/style1';
import Blog1 from './pages/blogsSection/blog1';
import BlogPosts from './pages/blogsSection/blogPosts';

const MainContainer = styled.div`
	margin: 35px 250px 60px;
	@media (max-width: 1100px) {
		margin: 35px 60px 50px;
	}
	@media (max-width: 630px) {
		margin: 20px 16px 30px;
	}
`;
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <HamburgerPage />
        <ScrollToTop />
        <MainContainer>
          <Switch>
            <Route exact path="/" component={Blog}/>
            <Route path="/hacker-news" component={HackerNews}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/pokemon/:slug" component={Pokemon}/>
            <Route path="/about" component={About}/>
            <Route exact path="/blog" component={Blog}/>
            <Route exact path="/blog/style1" component={BlogStyle1}/>
            <Route exact path="/blog/blog1" component={Blog1}/>
            <Route path="/post/:slug" component={BlogPosts}/>
            <Route component={NoMatchPage} />
          </Switch>
        </MainContainer>
        <Footer />
      </Router>
    </>
  )
};

const ListItem = styled.li`
  list-style: none;
  color: blue;
  margin-bottom: 12px;
`;
const Helloword = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getpokemon)
  },[]);
  const val = useSelector(state => state.counter);

  return (
  <>
    <ul>
    {
      Object.keys(val).map(function(key, index) {
        return (
          <ListItem key={key} >
            <Link to={{pathname:`/pokemon/${key}`}}> 
              {key}
            </Link>
          </ListItem>
        )
      })
    }
    </ul>
    <p>HELLO WORLD1</p>
  </>
)}

export default App; 
