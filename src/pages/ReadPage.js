import React from "react";
import Header from "../components/Header";
import { Grid } from "@mui/material";
import PostView from "../components/ReadPage/PostView";

//게시물 작성 완료 페이지 (작성한 글(1개)을 볼 수 있음)
const ReadPage = () => {
  return (
    <div>
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <PostView />
        </Grid>
      </Grid>
    </div>
  );
};

export default ReadPage;
