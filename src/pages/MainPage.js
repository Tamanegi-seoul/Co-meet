import React from "react";
import { useMediaQuery } from "react-responsive";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import GlobalStyles from "@mui/material/GlobalStyles";
import PostList from "../components/PostList";
import TeachStack from "../components/TeachStack";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainCarousel from "../components/MainCarousel";

const MainPage = () => {
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width:480px)" });
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {isDesktopOrMobile ? "" : <MainCarousel />}
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <TeachStack />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <PostList />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <Footer />
    </React.Fragment>
  );
};

export default MainPage;
