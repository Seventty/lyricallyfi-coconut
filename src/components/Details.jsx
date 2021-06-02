import React, { useState, useEffect } from 'react'
import SongArtist from './SongArtist'
import SongLyrics from './SongLyrics'


const Details = ({ search, lyrics, bio }) => {
    if(!search || !lyrics) return null;

    return (
        <>
            {lyrics.error || lyrics.name === "AbortError" ? console.log(`No existe la cancion ${search.song} que intentas buscar`) : <SongLyrics/>}
            {bio.artists ? <SongArtist/> : console.log(`No he encontrado el artista ${search.artist} solicitado`)}
        </>
    )
}

export default Details
