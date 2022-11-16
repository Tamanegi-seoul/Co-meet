import { React, useState, useCallback } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";
//1. 이메일, 비밀번호 유효성 추가하기
//2. alert가 아닌 빨간박스로 표시하기
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
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const ErrorMessage = styled.div`
    color: red;
  `;
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setpasswordError] = useState(false);
  const [agree, setAgree] = useState(false);
  const onChangenickName = useCallback(e => {
    setNickName(e.target.value);
  }, []);
  const onChangeEamil = useCallback(e => {
    setEmail(e.target.value);
  }, []);
  const onChangePassword = useCallback(e => {
    setPassword(e.target.value);
  }, []);
  const onChangePasswordCheck = useCallback(
    e => {
      setPasswordCheck(e.target.value);
      setpasswordError(e.target.value !== password);
    },
    [password]
  );
  const onChangeAgree = useCallback(
    e => {
      setAgree(!agree);
    },
    [agree]
  );

  const handleSubmit = event => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
    if (!passwordError) {
      if (agree) {
        console.log(email);
        console.log(password);
        console.log(nickName);
        console.log(agree);
      } else {
        alert("동의해주세요");
      }
    } else {
      alert("비번이 다릅니다!");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="nickName"
                  fullWidth
                  id="nickName"
                  label="Nick Name"
                  value={nickName}
                  onChange={onChangenickName}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={onChangeEamil}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={onChangePassword}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="passwordCheck"
                  label="PasswordCheck"
                  type="password"
                  id="passwordCheck"
                  value={passwordCheck}
                  onChange={onChangePasswordCheck}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                {passwordError && (
                  <ErrorMessage>비밀번호가 같지 않습니다.</ErrorMessage>
                )}
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      color="primary"
                      checked={agree}
                      onChange={onChangeAgree}
                    />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
