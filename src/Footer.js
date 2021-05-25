import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Button, ButtonGroup, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';



const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
  footerWrapper: {
    flexDirection: 'column',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

}));

export default function Footer(props) {
  const classes = useStyles();



  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg" align="center" className={classes.footerWrapper}>
        <ButtonGroup variant="text" size="small" aria-label="text primary button group">
          <Button>Guidelines</Button>
          <Button>FAQ</Button>
          <Button>Lists</Button>
          {/* <Button>API</Button>
          <Button>Security</Button>
          <Button>Legal</Button>
          <Button>Apply to YC</Button>
          <Button>Contact</Button> */}
        </ButtonGroup>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Container>
    </footer>
  );
}
