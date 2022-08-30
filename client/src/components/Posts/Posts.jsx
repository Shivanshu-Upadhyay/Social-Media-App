import React, { useEffect, useState } from "react";
import { fetchAllPost } from "../../Api/index";
import Post from "./Post/Post";
import { useDispatch } from "react-redux";
import { setAllPost } from "../../Redux/slice/postSlice";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { deleteOnePost } from "../../Api/index";
function Posts() {
  const dispatch = useDispatch();
  const [allPostData, setAllPostData] = useState([]);

  async function allPost() {
    const { data } = await fetchAllPost();
    dispatch(setAllPost(data.allPost));
    setAllPostData(data.allPost);
    console.log(data);
  }

  useEffect(() => {
    allPost();
  }, []);

  const deletePost = async (_id) => {
    let id = [{ _id }];
    const { data } = await deleteOnePost(id);
    console.log(data);
    allPost();
  };
  return (
    <>
     <h2 className="text-[24px]  mb-3 font-bold">
         List of All Posts
        </h2>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={6}>
          {allPostData?.map((item) => {
            return (
              <Post
                creator={item.creator}
                message={item.message}
                title={item.title}
                like={item.likeCount[0]}
                tags={item.tags}
                key={item._id}
                _id={item._id}
                selectedFile={item.selectedFile}
                deletePost={deletePost}
                allPost={allPost}
              />
            );
          })}
        </Grid>
      </Box>
    </>
  );
}

export default Posts;
