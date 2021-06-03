import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import './App.css';
import React from 'react'
import Header from './components/Header';

const useStyles = makeStyles((theme)=> ({
  root: {
    minHeight: '100vh',
    backgroundImage:`url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '5% 50%',
    [theme.breakpoints.down('sm')]: {
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/mobileBg.png'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    },
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
