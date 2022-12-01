import { Grid, inputAdornmentClasses } from "@mui/material";
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
  const [recruit_status, setStatus] = useState(""); //모집구분
  const [recruit_capacity, setCapacity] = useState(""); //모집인원
  const [type, setType] = useState(""); //진행방식
  const [expected_term, setTerm] = useState(""); //진행기간
  const [stacklist, setStacklist] = useState(""); //기술스택

  const [startDate, setStartDate] = useState(new Date());

  const statusHandler = e => {
    setStatus(e.target.value);
    console.log(e.target.value);
  };

  const capacityHandler = e => {
    setCapacity(e.target.value);
    console.log(e.target.value);
  };

  const typeHandler = e => {
    setType(e.target.value);
    console.log(e.target.value);
  };

  const termHandler = e => {
    setTerm(e.target.value);
    console.log(e.target.value);
  };

  const stacklistHandler = e => {
    setStacklist(e.target.value);
    console.log(e.target.value);
  };

  const addPost = e => {
    console.log("글등록");
  };

  const back = e => {
    console.log("취소");
  };
  // const handleChange = event => {
  //   setCapacity(event.target.value);
  // };

  // //지연
  // const [form, setForm] = useState({
  //   status: "",
  //   capacity: "",
  //   type: "",
  //   term: "",
  //   stacklist: "",
  // });

  // const { status, capacity, type, term, stacklist } = form;

  // const handleChange = e => {
  //   console.log(e.target);
  //   const { form, value } = e.target;
  //   setForm({
  //     ...form,
  //     [form]: value,
  //   });

  //   setForm(form);
  //   console.log(setForm);
  // };

  //

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
            <FormControl
              sx={{
                minWidth: "40%",
                margin: 1,
                width: { md: "100%", lg: "47.9%" },
              }}
            >
              <InputLabel>모집구분</InputLabel>
              <Select
                value={recruit_status}
                label="setForm"
                onChange={statusHandler}
              >
                <MenuItem name="스터디" value={10}>
                  스터디
                </MenuItem>
                <MenuItem name="프로젝트" value={20}>
                  프로젝트
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{
                minWidth: "40%",
                margin: 1,
                width: { md: "100%", lg: "47.9%" },
              }}
            >
              <InputLabel>모집인원</InputLabel>
              <Select
                value={recruit_capacity}
                label="form"
                onChange={capacityHandler}
              >
                <MenuItem value={10}>인원미정</MenuItem>
                <MenuItem value={20}>1명</MenuItem>
                <MenuItem value={30}>2명</MenuItem>
                <MenuItem value={40}>3명</MenuItem>
                <MenuItem value={50}>4명</MenuItem>
                <MenuItem value={60}>5명</MenuItem>
                <MenuItem value={70}>6명</MenuItem>
                <MenuItem value={80}>7명</MenuItem>
                <MenuItem value={90}>8명</MenuItem>
                <MenuItem value={100}>9명</MenuItem>
                <MenuItem value={110}>10명이상</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{
                minWidth: "40%",
                margin: 1,
                width: { md: "100%", lg: "47.9%" },
              }}
            >
              <InputLabel>진행방식</InputLabel>
              <Select value={type} label="form_how" onChange={typeHandler}>
                <MenuItem value={10}>온라인</MenuItem>
                <MenuItem value={20}>오프라인</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{
                minWidth: "40%",
                margin: 1,
                width: { md: "100%", lg: "47.9%" },
              }}
            >
              <InputLabel>진행기간</InputLabel>
              <Select
                value={expected_term}
                label="form_term"
                onChange={termHandler}
              >
                <MenuItem value={10}>기간 미정</MenuItem>
                <MenuItem value={20}>단기</MenuItem>
                <MenuItem value={30}>장기</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{
                minWidth: "40%",
                margin: 1,
                width: { md: "100%", lg: "47.9%" },
              }}
            >
              <InputLabel>기술스택</InputLabel>
              <Select value={stacklist} label="Age" onChange={stacklistHandler}>
                <MenuItem value={10}>Java</MenuItem>
                <MenuItem value={20}>Python</MenuItem>
                <MenuItem value={30}>C</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ margin: 1, width: { md: "100%", lg: "47.9%" } }}>
              <InputLabel>시작예정일</InputLabel>
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
            data=""
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

        <Grid
          item
          // xs={12}
          sm={11}
          container
          direction="row"
          justifyContent="flex-end"
        >
          <button
            style={{
              border: "none",
              backgroundColor: "#999999",
              color: "black",
              float: "right",
            }}
            onClick={back}
            className="buttonComplete"
            // className={styles.buttonComplete}
            name="register"
          >
            취소
          </button>

          <button
            onClick={addPost}
            className="buttonComplete"
            // className={styles.buttonComplete}
            name="register"
          >
            글 등록
          </button>
        </Grid>
      </Grid>
    </>
  );
};

export default WritePage;
