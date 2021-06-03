import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import Loader from '../extras/Loader';
import { httpHelper } from '../helper/HttpHelper';
import Details from './Details';
import Form from './Form';

const useStyles = makeStyles((theme) => ({
    title: {
        color: "#fff",
        fontFamily: "Nunito"
    },
    loaderPositionLeft: {
        position: "absolute",
        left: "100px",
        top: "170px",
    },
    loaderPositionRight: {
        position: "absolute",
        right: "100px",
        top: "170px",
    },
}));

const SongSearch = () => {
    const [search, setSearch] = useState(null);
    const [lyrics, setLyrics] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const classes = useStyles();

    const handlerSearch = (data) => {
      setSearch(data);
    } 

    useEffect(() => {
        if(search === null) return;
        const request = async() => {
          const { artist, song } = search;
          let artistUrl = encodeURI(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`);
          let songUrl = encodeURI(`https://api.lyrics.ovh/v1/${artist}/${song}`);
            
          setLoading(true);

            const [ artistReq, songReq ] = await Promise.all([httpHelper().get(artistUrl), httpHelper().get(songUrl)]);
            
            setBio(artistReq);
            setLyrics(songReq);
            
           setLoading(false);
        };
        request();
    }, [search]);

    return (
        <div>
            {loading && (
                <div>
                <div className={classes.loaderPositionLeft}>
                    <Loader/> 
                </div>
                    <div className={classes.loaderPositionRight}>
                        <Loader/>
                    </div>
                </div>
                )
            }
            <h1 className={classes.title}>Busca cualquier canción</h1>
            <Form handlerSearch={handlerSearch}/>
            {search && !loading && (
                <Details search={search} lyrics={lyrics} bio={bio}/>
            )}
        </div>
    )
}

export default SongSearch
