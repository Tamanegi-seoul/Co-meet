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
import { useForm } from "react-hook-form";
import { Input } from "@mui/material";
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
const ErrorMessage = styled.div`
  color: red;
`;

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const onSubmit = data => {
    console.log(data, "sdsdsdsd");
  };

  const onError = error => {
    console.log(error);
  };
  // const [nickName, setNickName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordCheck, setPasswordCheck] = useState("");
  // const [passwordError, setpasswordError] = useState(false);
  // const [agree, setAgree] = useState(false);
  // const onChangenickName = useCallback(e => {
  //   setNickName(e.target.value);
  // }, []);
  // const onChangeEamil = useCallback(e => {
  //   setEmail(e.target.value);
  // }, []);
  // const onChangePassword = useCallback(e => {
  //   setPassword(e.target.value);
  // }, []);
  // const onChangePasswordCheck = useCallback(
  //   e => {
  //     setPasswordCheck(e.target.value);
  //     setpasswordError(e.target.value !== password);
  //   },
  //   [password]
  // );
  // const onChangeAgree = useCallback(
  //   e => {
  //     setAgree(!agree);
  //   },
  //   [agree]
  // );

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   // const data = new FormData(event.currentTarget);
  //   // console.log({
  //   //   email: data.get("email"),
  //   //   password: data.get("password"),
  //   // });
  //   if (!agree) {
  //     return alert("동의를 해주세요");
  //   }
  //   if (passwordError) {
  //     return alert("비밀번호가 일치하지 않습니다");
  //   }
  //   console.log("회원가입 완료");
  // };

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
            onSubmit={handleSubmit(onSubmit, onError)}
            // onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  type="text"
                  name="nickName"
                  fullWidth
                  id="nickName"
                  label="Nick Name"
                  {...register("nickName", {
                    required: "닉네임은 필수 입력입니다.",
                    minLength: {
                      value: 2,
                      message: "최소 2글자를 넘어야 합니다.",
                    },
                  })}
                  // value={nickName}
                  // onChange={onChangenickName}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                {errors.nickName && (
                  <small role="alert">{errors.nickName.message}</small>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  {...register("email", {
                    required: "이메일은 필수 입력입니다.",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "이메일 형식에 맞지 않습니다.",
                    },
                  })}
                  // value={email}
                  // onChange={onChangeEamil}
                />
              </Grid>
              <Grid item xs={12}>
                {errors.email && (
                  <small role="alert">{errors.email.message}</small>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  {...register("password", {
                    required: "비밀번호는 필수 입력입니다.",
                    pattern: {
                      value:
                        /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,16}$/,
                      message:
                        "비밀번호를 8~16자로 영문 대소문자, 숫자, 특수기호를 조합해서 사용하세요. ",
                    },
                  })}
                  // value={password}
                  // onChange={onChangePassword}
                />
              </Grid>
              <Grid item xs={12}>
                {errors.password && (
                  <small role="alert">{errors.password.message}</small>
                )}
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="passwordCheck"
                  label="PasswordCheck"
                  type="password"
                  id="passwordCheck"
                  {...register("passwordCheck", {
                    required: "비밀번호확인 필수입력입니다.",
                    pattern: {},
                  })}
                />
              </Grid> */}
              {/* <Grid item xs={12}>
                {passwordError && (
                  <ErrorMessage>비밀번호가 같지 않습니다.</ErrorMessage>
                )}
              </Grid> */}
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      color="primary"
                      // checked={agree}
                      // onChange={onChangeAgree}
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
              disabled={isSubmitting}
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
