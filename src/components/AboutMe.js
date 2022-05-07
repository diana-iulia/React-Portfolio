import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import selfie from "../assets/cloud.jpg"

// TODO: write summary
export default function MediaCard() {
  return (
    <div id='aboutme'>
    <Card sx={{ maxWidth: "1000px", margin: "auto" }}>
      <CardMedia
        component="img"
        image={selfie}
        alt="mirror selfie of diana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          About Me:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Imaginative, analytical, and enthusiastic problem-solver with a relentless sense of humor. I'm deeply passionate about thorough and genuine customer service (yes, seriously) and aim to impress no matter the size of the job. If I'm not studying or slinging pizzas, you'll probably find me hanging out with fam, taking <a id='prettyLink' href='https://www.instagram.com/wo.maninthemachine/' target='_blank' rel="noreferrer">pretty pictures,</a> or giving my <a id='prettyLink' href='https://www.instagram.com/sir._.harold/' target='_blank' rel='noreferrer'>sweet stinky boy</a> belly rubs. 
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}
