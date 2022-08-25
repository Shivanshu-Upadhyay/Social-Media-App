import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import styles from "./post.module.css"
export default function Post({creator,
  title,
  tags,
  message}) {
  return (
    <>
      <Grid item xs={12}   md={4} lg={3} >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
           className={`${styles.img}`}
            image="https://picsum.photos/1200/1200"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             {creator}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {message}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
