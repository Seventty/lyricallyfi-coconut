import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react'
import Loader from '../extras/Loader';
import Details from './Details';
import Form from './Form';

const useStyles = makeStyles((theme) => ({
    title: {
        color: "#fff",
        fontFamily: "Nunito"
    }
}));

const SongSearch = () => {
    const [search, setSearch] = useState(null);
    const [lyrics, setLyrics] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);
    const classes = useStyles();

    const handlerSearch = (data) => {
      console.log(data);
    }

    return (
        <div>
            {loading && <Loader/>}
            <h1 className={classes.title}>Busca cualquier canción</h1>
            <Form handlerSearch={handlerSearch}/>
            <Details search={search} lyrics={lyrics} bio={bio}/>
        </div>
    )
}

export default SongSearch
