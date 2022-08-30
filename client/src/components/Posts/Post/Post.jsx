import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Tooltip from "@mui/material/Tooltip";
import styles from "./post.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import { likePost, updateOnePost } from "../../../Api";
import { useDispatch } from "react-redux";
import { setOnePost } from "../../../Redux/slice/postSlice";
import {useNavigate} from 'react-router-dom'

export default function Post({
  creator,
  title,
  tags,
  message,
  _id,
  deletePost,
  selectedFile,
  like,
  allPost
}) {

  

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const readOnePost = async (_id) => {
    const { data } = await updateOnePost({_id});
    console.log(data.onePostVal);
    dispatch(setOnePost(data.onePostVal));
    navigate(`/updatePost/${_id}`)
  };
  const handleLike = async(id)=>{
    const {data} = await likePost(id)
    console.log(data);
    allPost();
  }
  return (
    <>
      <Grid item xs={12} md={4} lg={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            className={`${styles.img}`}
            image={selectedFile}
            alt="not found"
          />
          <CardContent>
            <div className="flex justify-between items-center">
            <div>{tags[0].split(',').map((item,i)=><span className=" text-blue-800" key={i}>#{item} </span>)}</div>
              
              <Tooltip
                title="Edit"
                className=" cursor-pointer"
                onClick={() => readOnePost(_id)}
              >
                <MoreHorizIcon />
              </Tooltip>
            </div>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {message}
            </Typography>
            <div className="flex justify-end">
              <u>
                <cite>
                  <span className="text-[12px] font-bold">Created By-</span>
                  <span className="text-[14px]">
                    <b>{creator}</b>
                  </span>
                </cite>
              </u>
            </div>
          </CardContent>
          <CardActions className="flex justify-between">
            <Button size="small"onClick={()=>handleLike(_id)}>
              <span className="font-bold">Like</span> <FavoriteBorderIcon />{like}
            </Button>
            <Button size="small" onClick={() => deletePost(_id)}>
              <span className="font-bold text-red-600">Delete</span>
              <DeleteIcon className="text-red-600" />
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
