import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SendIcon from "@mui/icons-material/Send";
import styles from "./form.module.css";
import Button from "@mui/material/Button";
import { createNewPost, updateOnePost } from "../../Api/index";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
function Form() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { onePost } = useSelector((state) => state.postReducer);
  const [formData, setFormData] = useState({
    creator: "",
    title: "",
    tags: "",
    message: "",
    selectedFile: "./imgs/avatar.svg",
  });

  useEffect(() => {
    if (id) {
      setFormData((pre) => ({
        ...pre,
        creator: onePost?.creator,
        title: onePost?.title,
        tags: onePost?.tags,
        message: onePost?.message,
        selectedFile: onePost?.selectedFile,
      }));
    } else {
      setFormData({
        creator: "",
        title: "",
        tags: "",
        message: "",
        selectedFile: "./imgs/avatar.svg",
      });
    }
  }, [onePost, id]);

  const chooseImg = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setFormData((pre) => ({ ...pre, selectedFile: reader.result }));
    };
  };

  const handleChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        const data = await updateOnePost({ ...formData, _id: id });
        console.log(data);
        navigate("/");
      } else {
        const { data } = await createNewPost(formData);
        console.log(data);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <h2 className="text-[24px]  mb-3 font-bold">
          {id ? "Update" : "Create New"} Post
        </h2>
      </div>
      <form autoComplete="off">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <TextField
                name="creator"
                label="Creator Name "
                variant="outlined"
                fullWidth
                value={formData.creator}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                name="title"
                label="Title "
                variant="outlined"
                fullWidth
                value={formData.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                name="tags"
                label="Tags "
                variant="outlined"
                fullWidth
                value={formData.tags}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Message"
                multiline
                name="message"
                rows={4}
                variant="outlined"
                fullWidth
                value={formData.message}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <div className=" flex justify-center items-center flex-col">
                <img
                  src={formData.selectedFile}
                  alt="not found"
                  className={`${styles.img}`}
                />

                <div className=" text-[#0077FF] my-2 cursor-pointer">
                  <input
                    name="img"
                    type="file"
                    onChange={chooseImg}
                    id="avtarInput"
                    className="hidden"
                  />
                  <label
                    htmlFor="avtarInput"
                    className=" cursor-pointer font-[600]"
                  >
                    Choose a different photo
                  </label>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} className="">
              <Button variant="contained" onClick={handleSubmit}>
                Post
                <SendIcon className="mx-2" />
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </>
  );
}

export default Form;
