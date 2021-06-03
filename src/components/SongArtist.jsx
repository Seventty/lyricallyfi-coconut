import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    position: "absolute",
    right: "90px",
    top: "80px",
    border: "1px solid #40e495",
    boxShadow: "0 3px 6px 0 rgba(49, 196, 190, 0.75)",
    background: "rgb(0,0,0,0.6)",
  },
  media: {
    height: 190,
  },
  cardBox: {
    width: "300px",
    height: "300px",
    overflow: "auto",
  },
  biography: {
    fontFamily: "Nunito",
    color: "#fff"
  },
  bioTitle: {
    color: "#fff",
    fontWeight: "bolder"
  },
  bioInfo: {
    color: "#fff",
  },
  infoTag: {
      color: "#1dc976",
      fontWeight: "bolder",
  },
  artistButton: {
    textDecoration: "none",
    '&:link':{
      textDecoration: "none",
    },
  }
});

export default function SongArtist({ artist }) {
  const classes = useStyles();
  
  const { strArtist, intBornYear, intDiedYear, strStyle, strGenre, strWebsite, strBiographyEN, strBiographyES, strCountry, strArtistThumb } = artist;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={strArtistThumb}
          title="Artist image"
        />
        <CardContent className={classes.cardBox}>
          <Typography className={classes.bioTitle} gutterBottom variant="h5" component="h2">
            {strArtist}
          </Typography>
          <Typography className={classes.biography} variant="body2" color="textSecondary" component="blockquote">
            {strBiographyES || strBiographyEN}
          </Typography>
          <Typography className={classes.bioInfo} variant="body2" color="textSecondary" component="p">
              <br/>
            <span className={classes.infoTag}>Fecha de nacimiento:</span> {intBornYear} - {intDiedYear || "actualidad"} <br/>
            <span className={classes.infoTag}>País:</span> {strCountry}<br/>
            <span className={classes.infoTag}>Estilo músical:</span> {strStyle}<br/>
            <span className={classes.infoTag}>Genero musical:</span> {strGenre}<br/>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button className={classes.artistButton} size="small">
          <a href={`http://${strWebsite}`}>Website</a>
        </Button>
      </CardActions>
    </Card>
  );
}
