import React, { useEffect, useState } from "react";
import { fetchAllPost } from "../../Api/index";
import Post from "./Post/Post";
import { useDispatch } from "react-redux";
import { setAllPost } from "../../Redux/slice/postSlice";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
function Posts() {
  const dispatch = useDispatch();
  const [allPostData, setAllPostData] = useState([]);
  useEffect(() => {
    async function allPost() {
      const { data } = await fetchAllPost();
      dispatch(setAllPost(data.allPost));
      setAllPostData(data.allPost);
      console.log(data);
    }
    allPost();
  }, [dispatch]);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={6} >
          {allPostData?.map((item) => {
            return (
              <Post
                creator={item.creator}
                message={item.message}
                title={item.title}
                tags={item.tags}
                key={item._id}
              />
            );
          })}
        </Grid>
      </Box>
    </>
  );
}

export default Posts;
