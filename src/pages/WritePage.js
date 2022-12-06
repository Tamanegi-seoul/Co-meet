import { Grid, inputAdornmentClasses, MenuList } from "@mui/material";
import React, { useEffect, useState } from "react";
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
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";

//다중 select
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const stacks = [
  "Java",
  "JavaScript",
  "TypeScript",
  "Python",
  "R",
  "C",
  "C++",
  "Go",
  "Swift",
  "Kotlin",
  "MySQL",
  "MongoDB",
  "Php",
  "Flutter",
  "Spring",
  "React",
  "ReactNative",
  "Vue",
  "NodeJs",
  "NextJS",
  "NestJS",
  "Express",
  "Django",
  "GraphQL",
  "Firebase",
  "Unity",
  "Aws",
  "Kubernetes",
  "Docker",
  "Git",
  "Figma",
  "Zeplin",
];

function getStyles(option, stack, theme) {
  return {
    fontWeight:
      stack.indexOf(option) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

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

  const [startDate, setStartDate] = useState(new Date());

  const theme = useTheme();
  const [stack, setStack] = React.useState([]);

  const stackHandler = event => {
    const {
      target: { value },
    } = event;
    setStack(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

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

  const addPost = e => {
    console.log("글등록");
    console.log({
      recruit_status,
      recruit_capacity,
      type,
      expected_term,
      stack,
      startDate,
    });
  };

  const back = e => {
    console.log("취소");
  };

  // useEffect(() => {
  //   console.log({
  //     recruit_status,
  //     recruit_capacity,
  //     type,
  //     expected_term,
  //     stacklist,
  //     startDate,
  //   });
  // });

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
                <MenuItem name="스터디" value={"스터디"}>
                  스터디
                </MenuItem>
                <MenuItem name="프로젝트" value={"프로젝트"}>
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
                <MenuItem value={"인원미정"}>인원미정</MenuItem>
                <MenuItem value={"1명"}>1명</MenuItem>
                <MenuItem value={"2명"}>2명</MenuItem>
                <MenuItem value={"3명"}>3명</MenuItem>
                <MenuItem value={"4명"}>4명</MenuItem>
                <MenuItem value={"5명"}>5명</MenuItem>
                <MenuItem value={"6명"}>6명</MenuItem>
                <MenuItem value={"7명"}>7명</MenuItem>
                <MenuItem value={"8명"}>8명</MenuItem>
                <MenuItem value={"9명"}>9명</MenuItem>
                <MenuItem value={"10명이상"}>10명이상</MenuItem>
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
                <MenuItem value={"온라인"}>온라인</MenuItem>
                <MenuItem value={"오프라인"}>오프라인</MenuItem>
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
                <MenuItem value={"기간 미정"}>기간 미정</MenuItem>
                <MenuItem value={"단기"}>단기</MenuItem>
                <MenuItem value={"장기"}>장기</MenuItem>
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
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={stack}
                onChange={stackHandler}
                input={<OutlinedInput label="Name" />}
                renderValue={selected => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map(value => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {stacks.map(option => (
                  <MenuItem
                    key={option}
                    value={option}
                    style={getStyles(option, stack, theme)}
                  >
                    {option}
                  </MenuItem>
                ))}
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
            name="register"
          >
            취소
          </button>

          <button onClick={addPost} className="buttonComplete" name="register">
            글 등록
          </button>
        </Grid>
      </Grid>
    </>
  );
};

export default WritePage;
