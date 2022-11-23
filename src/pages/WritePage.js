import { Grid } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// 게시물 작성 페이지
const Title = styled.div`
  border-bottom: 1px solid;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: Dodgerblue;
  text-align: center;
  line-height: 50px;
  font-size: 24px;
`;

const WritePage = () => {
  const [age, setAge] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <>
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Title>
            <Circle>1</Circle> 프로젝트 기본 정보를 입력해주세요.
          </Title>
          <Box>
            <FormControl sx={{ margin: 1, width: { md: "100%", lg: "47.9%" } }}>
              <InputLabel>Age</InputLabel>
              <Select value={age} label="Age" onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ margin: 1, width: { md: "100%", lg: "47.9%" } }}>
              <InputLabel>Age</InputLabel>
              <Select value={age} label="Age" onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ margin: 1, width: { md: "100%", lg: "47.9%" } }}>
              <InputLabel>Age</InputLabel>
              <Select value={age} label="Age" onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ margin: 1, width: { md: "100%", lg: "47.9%" } }}>
              <InputLabel>Age</InputLabel>
              <Select value={age} label="Age" onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ margin: 1, width: { md: "100%", lg: "47.9%" } }}>
              <InputLabel>Age</InputLabel>
              <Select value={age} label="Age" onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ margin: 1, width: { md: "100%", lg: "47.9%" } }}>
              <InputLabel>Date</InputLabel>
              <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
              />
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={1}></Grid>

        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Title>
            <Circle>2</Circle> 프로젝트에 대해 소개해주세요.
          </Title>
          <CKEditor
            editor={ClassicEditor}
            data="<p></p>"
            onReady={editor => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </>
  );
};

export default WritePage;
