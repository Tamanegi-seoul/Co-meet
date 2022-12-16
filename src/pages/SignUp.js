import { React } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import styled from "styled-components";
import { Controller, useForm } from "react-hook-form";
import { Autocomplete } from "@mui/material";
import { useDispatch } from "react-redux";
import { checkIdEmailAsync, signUpAsync2 } from "../store/user/user";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { onErrorAlert, onSuccessAlert, Toast } from "../components/Alert/Alert";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const objOptions = [{ value: "JAVA" }, { value: "REACT" }, { value: "SPRING" }];
const theme = createTheme();
const ErrorMessage = styled.div`
  color: red;
`;

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = data => {
    let arr = []; //빈배열생성
    //arr 배열에 기존 Stacks 배열 value값 저장
    data.prefer_stacks.forEach(function (obj, index) {
      arr.push(obj.value);
    });
    //arr배열을 Stacks배열에 덮어쓰기
    data.prefer_stacks = [...arr];
    dispatch(signUpAsync2(data));
    onSuccessAlert("Signed up successfully");
    navigate("/login");
  };

  const onError = error => {
    onErrorAlert("Signed up false");
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
            onSubmit={handleSubmit(onSubmit, onError)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
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
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                {errors.nickName && (
                  <small role="alert">
                    <ErrorMessage>{errors.nickName.message}</ErrorMessage>
                  </small>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
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
                />
              </Grid>
              <Grid item xs={12}>
                {errors.email && (
                  <small role="alert">
                    <ErrorMessage>{errors.email.message}</ErrorMessage>
                  </small>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  {...register("password", {
                    required: "비밀번호는 필수 입력입니다.",
                    pattern: {
                      value:
                        /(?=.*\d{1,50})(?=.*[~`!@#$%^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,16}$/,
                      message:
                        "비밀번호를 8~16자로 영문 대소문자, 숫자, 특수기호를 조합해서 사용하세요. ",
                    },
                  })}
                />
              </Grid>
              <Grid item xs={12}>
                {errors.password && (
                  <small role="alert">
                    <ErrorMessage>{errors.password.message}</ErrorMessage>
                  </small>
                )}
              </Grid>
              <Grid item xs={12}>
                <Controller
                  control={control}
                  name="prefer_stacks"
                  {...register("prefer_stacks", {
                    required: "하나 이상의 스택을 선택해야합니다.",
                  })}
                  render={({ field: { onChange, ...field } }) => (
                    <Autocomplete
                      multiple
                      options={objOptions}
                      getOptionLabel={option => option.value}
                      onChange={(_, data) => onChange(data)}
                      renderInput={params => (
                        <TextField
                          {...field}
                          {...params}
                          fullWidth
                          variant="filled"
                          label="object-complete"
                        />
                      )}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                {errors.prefer_stacks && (
                  <small role="alert">
                    <ErrorMessage>{errors.prefer_stacks.message}</ErrorMessage>
                  </small>
                )}
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
