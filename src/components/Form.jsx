import { makeStyles } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import Alert from '../extras/Alert';


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
 },
}));

const Form = ({ handlerSearch }) => {
    const [form, setForm] = useState(initialForm);

    const handlerChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });      
    
    };

    const handlerSubmit = (e) => {
      e.preventDefault();

      if(!form.artist || !form.song){
          Alert("Llena ambos campos para buscar de manera efectiva");
          return;
      };

      handlerSearch(form);

      setForm(initialForm);

    };

    const classes = useStyles();
    return (
        <div className={classes.artistForm}>
            <form onSubmit={handlerSubmit}>
                <input type="text" name="artist" className={classes.inputStyle} id="singer-id" placeholder="Nombre del cantante"  onChange={handlerChange} value={form.artist}/>
                <input type="text" name="song" className={classes.inputStyle} id="song-id" placeholder="Título de la canción" onChange={handlerChange} value={form.song}/>
                <button type="submit" className={classes.buttonStyle}>Buscar coconut</button>
            </form>
        </div>
    )
}

export default Form
