import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link style={{ marginRight: 8 }} color="inherit" href="https://mui.com/">
        Co-meet
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
        <div display="flex" flex-direction="column">
          <FooterNav>
            <span className="title">
              <Link
                style={{
                  fontSize: "25px",
                  fontWeight: "900",
                  fontStyle: "italic",
                }}
                variant="inherit"
                underline="none"
                color="text.primary"
                href="/"
              >
                Co Meet
              </Link>
            </span>
            <span>
              <Link href="#" underline="none">
                개인정보보호정책
              </Link>
            </span>
            <span className="fnq">
              <Link href="#" underline="none">
                FAQ
              </Link>
            </span>
          </FooterNav>
          <FooterInfo>
            <span>co-meet</span>
            <br />
            <span display="inline-block" margin-right="30px">
              대표자: 박준우
            </span>
            <br />
            <span>개인정보책임자: 김태이 </span>
            <br />
            <span>주소: 서울 관악구 관악로 165 홍빌딩 9층</span>
          </FooterInfo>
        </div>
        {/* 위에 영어 지우고 이 자리에 컴포넌트 연결하면 됩니다. */}
      </Grid>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};

const FooterNav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  .title {
    margin-right: 10px;
  }
  .fnq:before {
    display: inline-block;
    content: "|";
    color: #bdbdbd;
    margin: 0 8px;
    font-size: 14px;
  }
`;

const FooterInfo = styled.div``;
export default Footer;
