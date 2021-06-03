import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    position: "absolute",
    left: "90px",
    top: "90px",
    maxWidth: 345,
    border: "1px solid #40e495",
    boxShadow: "0 3px 6px 0 rgba(49, 196, 190, 0.75)",
    background: "rgb(0,0,0,0.6)",
  },
  media: {
    height: 190,
  },
  cardBox: {
    width: "340px",
    height: "500px",
    overflow: "auto",
  },
  lyricsStyle: {
      fontWeight: "bold",
      fontFamily: "Nunito"
  },
  lyricsTitle: {
      color: "#fff",
  },
  lyricsText: {
      color: "#fff",
      whiteSpace: "pre-wrap",
  }
});

export default function SongArtist({ song, lyrics }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent className={classes.cardBox}>
          <Typography className={classes.lyricsTitle} gutterBottom variant="h5" component="h2">
            Letra: {song}
          </Typography>
          <Typography className={classes.lyricsText} variant="body2" color="textSecondary" component="p">
              {lyrics}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
