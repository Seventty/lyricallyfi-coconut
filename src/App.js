import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import Header from './components/Header';

const useStyles = makeStyles((theme)=> ({
  root: {
    minHeight: '100vh',
    backgroundImage:`url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '5% 50%',
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <CssBaseline/>
        <Header/>
      </div>
    </>
  )
}

export default App
