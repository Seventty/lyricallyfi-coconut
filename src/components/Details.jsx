import {  makeStyles } from '@material-ui/core'
import React from 'react'
import SongArtist from './SongArtist'
import SongLyrics from './SongLyrics'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100hv",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));

const Details = ({ search, lyrics, bio }) => {


    const classes = useStyles();

    if(!search || !lyrics) return null;

    return (
            <div className={classes.root}>
                {lyrics.error || lyrics.name === "AbortError" ? console.log(`No existe la cancion ${search.song} que intentas buscar`) : <SongLyrics lyrics={lyrics.lyrics} song={search.song}/>}
                {bio.artists ? <SongArtist artist={bio.artists[0]}/> : console.log(`No he encontrado el artista ${search.artist} solicitado`)}
            </div> 
    )
}

export default Details

