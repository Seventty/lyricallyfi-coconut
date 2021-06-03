import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import SongArtist from './SongArtist';
import SongSearch from './SongSearch';


const useStyle = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh"
    },
    appbar: {
      background: "none",
      fontFamily: "Nunito",
    },
    appbarWrapper: {
        width: '95%',
        margin: "0 auto"
    },
    colorText: {
        color: "#a6f2cd",
        fontFamily: "Pattaya"
    },
    title: {
        color: "#fff"
    }
}));

const Header = () => {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1>Lyricallyfi-<span className={classes.colorText}>Coconut</span></h1>
                </Toolbar>
            </AppBar>
            <SongSearch/>
        </div>
    )
}

export default Header
