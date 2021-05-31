
import { makeStyles } from '@material-ui/core'
import React, { useState, useEffect } from 'react'

const initialForm = {
    artist: "",
    song: "",
};

const useStyles = makeStyles((themes) => ({
 inputStyle: {
     display: "block",
     width: "100%",
     margin: "10px 0",
     padding: "10px",
     backgroundColor: "#fafafa",
     border: "1px solid",
     borderRadius: "13px",
     transition: ".3s box-shadow",
     
     "&:hover": {
        boxShadow: "box-shadow:0 0 4px rgba(0,0,0,0.5)",
     },
 },
 buttonStyle: {
    border: "none",
    padding: "10px",
    color: "#fff",
    fontSize: "16px",
    borderRadius: "30px",
    fontWeight: "700",
    width: "100%",
    outline: "none",
    background: "linear-gradient(to left, #40e495, #40e495)",
    boxShadow: "0 4px 15px 0 rgba(49, 196, 190, 0.75)",
    textArea: "",

    "&:hover": {
        
    },
 },
}));

const Form = ({ handlerSearch }) => {
    const [form, setForm] = useState(initialForm);

    const handlerChange = (e) => {
        
    };

    const classes = useStyles();
    return (
        <div className={classes.artistForm}>
            <form>
                <div className="artist">
                    <input type="text" className={classes.inputStyle} id="singer-id" placeholder="Introduce el nombre de cantante"  onChange={handlerChange} value={form.artist}/>
                </div>
                <div className="song">
                    <input type="text" className={classes.inputStyle} id="song-id" placeholder="Introduce la cancion del artista" onChange={handlerChange} value={form.song}/>
                </div>
                <button type="submit" className={classes.buttonStyle}>Buscar coconut</button>
            </form>
        </div>
    )
}

export default Form
