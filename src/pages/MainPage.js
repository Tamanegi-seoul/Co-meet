import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import GlobalStyles from "@mui/material/GlobalStyles";
import PostList from "../components/PostList";
import TeachStack from "../components/TeachStack";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainCarousel from "../components/MainCarousel";
import InformationEdit from "./InformationEdit";

const MainPage = () => {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />

      {/* begin of header*/}
      <Header />
      <InformationEdit />
      {/* end header */}

      {/* slide */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MainCarousel></MainCarousel>
        </Grid>
        {/* slide */}

        {/* TechStack */}
        <Grid item xs={1.5}></Grid>
        <Grid item xs={9}>
          <TeachStack />
        </Grid>
        <Grid item xs={1.5}></Grid>
        {/* TechStack */}

        {/* PostList */}
        <Grid item xs={1.5}></Grid>
        <Grid item xs={9}>
          <PostList />
        </Grid>
        <Grid item xs={1.5}></Grid>
        {/* PostList */}
      </Grid>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </React.Fragment>
  );
};

export default MainPage;
