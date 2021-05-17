import React from 'react';
import './App.css';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import { AppBar, Container, Toolbar, Typography, ButtonGroup, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FeaturedPost from './FeaturedPosts';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  title: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(1)
  },
  buttonGroup: {
    marginRight: theme.spacing(50)
  },
}))

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

function App() {

  const classes = useStyles();

  return (
    <>
      <AppBar position='fixed'>
        <Container fixed>
          <Toolbar>
            <BrightnessHighIcon />
            <Typography variant="h6" className={classes.title}>Hacker News</Typography>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" className={classes.buttonGroup}>
              <Button>new</Button>
              <Button>past</Button>
              <Button>comments</Button>
              <Button>ask</Button>
              <Button>show</Button>
              <Button>jobs</Button>
              <Button>submit</Button>
            </ButtonGroup>
            <Button variant="contained" color="defaults">
              login
          </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <main>
          <Container fixed>
            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
          </Container>
      </main>
    </>
  );
}

export default App;
