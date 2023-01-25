import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useSelector } from "react-redux";
import ModalUserInfo from "./Modal/ModalUserInfo";
import "../App.css";

const Header = () => {
  const userInfo = useSelector(state => state.user.nickName);

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
      maxwidth="md"
      component="main"
    >
      <Toolbar
        sx={{ flexWrap: "wrap" }}
        style={{
          backgroundColor: "white",
        }}
      >
        <Typography
          style={{ padding: "20px 0px" }}
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          <Link
            style={{
              paddingLeft: "100px",
              fontSize: "25px",
              fontWeight: "900",
              fontFamily: "Nunito-Black",
            }}
            variant="inherit"
            underline="none"
            color="text.primary"
            href="/"
          >
            Co Meet
          </Link>
        </Typography>
        <nav style={{ display: "flex", alignItems: "center" }}>
          {userInfo == null ? (
            ""
          ) : (
            <Link
              style={{
                fontSize: "18px",
                fontWeight: "900",
              }}
              variant="button"
              color="text.primary"
              underline="none"
              href="/write"
              sx={{ my: 1, mx: 2 }}
            >
              새 글 쓰기
            </Link>
          )}
          {userInfo == null ? (
            <Button
              href="/login"
              variant="outlined"
              sx={{
                my: 1,
                mx: 3.5,
              }}
              style={{
                backgroundColor: "#1976D2",
                color: "white",
                border: "none",
                marginRight: "100px",
              }}
            >
              Login
            </Button>
          ) : (
            <ModalUserInfo />
          )}
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
