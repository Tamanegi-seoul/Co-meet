import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Container
      maxWidth="md"
      component="footer"
      sx={{
        borderTop: theme => `1px solid ${theme.palette.divider}`,
        mt: 2,
        py: [3, 6],
      }}
    >
      <Grid container spacing={4} justifyContent="space-evenly">
        Footer area
        {/* 위에 영어 지우고 이 자리에 컴포넌트 연결하면 됩니다. */}
      </Grid>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};

export default Footer;
