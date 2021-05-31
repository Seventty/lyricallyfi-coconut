import React, { useState, useEffect } from 'react'
import SongArtist from './SongArtist'
import SongLyrics from './SongLyrics'


const Details = ({ search, lyrics, bio }) => {
    return (
        <div>
            <SongArtist/>
            <SongLyrics/>
        </div>
    )
}

export default Details
