import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import { Container, Grid, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Footer from './Footer';

import NewsPage from './pages/NewsPage/NewsPage'
import PostPage from './pages/PostPage/PostPage'

import { getNewsThunk } from '../src/redux/actions'
import { useDispatch, useSelector } from 'react-redux';

const sections = [
  { title: 'New', url: '#' },
  { title: 'Past', url: '#' },
  { title: 'Comments', url: '#' },
  { title: 'Ask', url: '#' },
  { title: 'Show', url: '#' },
  { title: 'Jobs', url: '#' },
  { title: 'Submit', url: '#' },
];

function App() {
  return (
    <Router>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Hacker News" sections={sections} />

        <Switch>
          <Route exact path="/news"><NewsPage /></Route>
          <Route path="/news/:id"><PostPage /></Route>

          <Redirect exact from="/" to="news" />
        </Switch>

        <Footer title="Footer" description="Something here to give the footer a purpose!" />
      </Container>
    </Router>
  )
}

export default App;
