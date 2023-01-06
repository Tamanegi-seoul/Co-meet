import { Grid, inputAdornmentClasses, MenuList } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "react-datepicker/dist/react-datepicker.css";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";
import Axios from "axios";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useSelector } from "react-redux";

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

const stacks = ["JAVA", "JAVA_SCRIPT", "PYTHON", " SPRING", " REACT", "R"];

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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: Dodgerblue;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
  margin-right: 8px;
`;

const WritePage = () => {
  const [title, setTitle] = useState("");
  const [recruit_capacity, setCapacity] = useState(""); //모집인원
  const [remote, setRemote] = useState(""); //진행방식
  const [expected_term, setTerm] = useState(""); //진행기간
  const [start_date, setStartDate] = React.useState(null);
  const [contact_type, setContactType] = useState("");
  const [contact, setContact] = useState("");
  const [group_type, setGroupType] = useState(""); //모집구분
  const [content, setContent] = useState(""); //내용
  const poster_id = useSelector(state => state.user.memberId);
  const theme = useTheme();
  const [designated_stacks, setStack] = React.useState([]);
  const navigate = useNavigate();

  const stackHandler = event => {
    const {
      target: { value },
    } = event;
    setStack(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const capacityHandler = e => {
    setCapacity(e.target.value);
    console.log(e.target.value);
  };

  const remoteHandler = e => {
    setRemote(e.target.value);
    console.log(e.target.value);
  };

  const termHandler = e => {
    setTerm(e.target.value);
    console.log(e.target.value);
  };

  const contact_typeHandler = e => {
    setContactType(e.target.value);
    console.log(e.target.value);
  };

  const contact_Handler = e => {
    setContact(e.target.value);
    console.log(e.target.value);
  };

  const group_type_Handler = e => {
    setGroupType(e.target.value);
    console.log(e.target.value);
  };

  const date_Hanler = newValue => {
    setStartDate(newValue);
    console.log(newValue);
  };

  const title_Hanler = e => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const content_Handler = (event, editor) => {
    setContent(editor.getData());
    console.log(editor.getData());
    // Define your onSubmit function here
    // ...
    // for example, setData() here
  };

  const addPost = e => {
    e.preventDefault();
    Axios.post(
      "http://3.39.32.185:8080/api/post/register",
      {
        title,
        content,
        group_type,
        contact_type,
        contact,
        poster_id, //user id
        start_date,
        expected_term,
        recruit_capacity,
        designated_stacks,
        remote,

        // recruit_status,
        // recruit_capacity,
        // type,
        // expected_term,
        // stack,
        // startDate,
      },
      {
        headers: {
          //       "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    )
      .then(res => {
        console.log("게시글 등록됨", res);
        navigate("/post/" + res.data.data.post_id);
      })
      .catch(err => console.log(err));
  };

  // console.log("글등록");
  // console.log({
  //   recruit_status,
  //   recruit_capacity,
  //   type,
  //   expected_term,
  //   stack,
  //   startDate,
  // });

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
            <Circle>1</Circle> <h3>프로젝트 기본 정보를 입력해주세요.</h3>
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
                value={group_type}
                label="setForm"
                onChange={group_type_Handler}
              >
                <MenuItem value={"STUDY"}>스터디</MenuItem>
                <MenuItem value={"PROJECT"}>프로젝트</MenuItem>
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
                {/* <MenuItem value={"인원미정"}>인원미정</MenuItem> */}
                <MenuItem value={"1"}>1명</MenuItem>
                <MenuItem value={"2"}>2명</MenuItem>
                <MenuItem value={"3"}>3명</MenuItem>
                <MenuItem value={"4"}>4명</MenuItem>
                <MenuItem value={"5"}>5명</MenuItem>
                <MenuItem value={"6"}>6명</MenuItem>
                <MenuItem value={"7"}>7명</MenuItem>
                <MenuItem value={"8"}>8명</MenuItem>
                <MenuItem value={"9"}>9명</MenuItem>
                <MenuItem value={"10"}>10명</MenuItem>
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
              <Select value={remote} label="form_how" onChange={remoteHandler}>
                <MenuItem value={true}>온라인</MenuItem>
                <MenuItem value={false}>오프라인</MenuItem>
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
                <MenuItem value={"0"}>기간 미정</MenuItem>
                <MenuItem value={"1"}>1개월</MenuItem>
                <MenuItem value={"2"}>2개월</MenuItem>
                <MenuItem value={"3"}>3개월</MenuItem>
                <MenuItem value={"4"}>4개월</MenuItem>
                <MenuItem value={"5"}>5개월</MenuItem>
                <MenuItem value={"6"}>6개월</MenuItem>
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
                value={designated_stacks}
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
                    style={getStyles(option, designated_stacks, theme)}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl
              sx={{
                minWidth: "40%",
                margin: 1,
                width: { md: "100%", lg: "47.9%" },
              }}
            >
              <InputLabel></InputLabel>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="시작예정일"
                  value={start_date}
                  onChange={date_Hanler}
                  renderInput={params => <TextField {...params} />}
                />
              </LocalizationProvider>

              {/* <DatePicker
                selected={start_date}
                onChange={date => setStartDate(date)}
              
              /> */}
            </FormControl>
            <FormControl
              sx={{
                minWidth: "40%",
                margin: 1,
                width: { md: "100%", lg: "47.9%" },
              }}
            >
              <InputLabel>연락 방법</InputLabel>
              <Select
                value={contact_type}
                label="form_how"
                onChange={contact_typeHandler}
                style={{
                  marginBottom: 3,
                }}
              >
                <MenuItem id="kakao" value={"KAKAO_OPEN_CHAT"}>
                  카카오톡 오픈 채팅
                </MenuItem>
                <MenuItem id="google_form" value={"GOOGLE_FORM"}>
                  구글 폼
                </MenuItem>
              </Select>
              {/* <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={contact}
                onChange={contact_Handler}
                // input={<BootstrapInput />}
              > */}

              <TextField
                id="standard-basic"
                value={contact}
                onChange={contact_Handler}
                label="연락 주소"
                variant="outlined"
              />

              {/* <MenuItem value={"KAKAO_OPEN_CHAT"}>온라인</MenuItem>
                <MenuItem value={"GOOGLE_FORM"}>오프라인</MenuItem> */}
              {/* </Select> */}
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={1}></Grid>

        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Title>
            <Circle>2</Circle> <h3>프로젝트에 대해 소개해주세요.</h3>
          </Title>
          {/* <Title>제목</Title>
           */}
          <label>
            <h4 style={{ margin: "0px" }}>제목</h4>
          </label>
          <TextField
            required
            value={title}
            onChange={title_Hanler}
            placeholder="글 제목을 입력해주세요"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <WriteArea>
            <CKEditor
              editor={ClassicEditor}
              data={content}
              onReady={editor => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={content_Handler}
              // onChange={
              //   ((_, editor) => setContent(editor.getData()));
              //   console.log({ _, editor, setContent }));
              // }
              // onChange={(_, editor) => {
              //   setContent = editor.getData();

              //   // content = data;
              //   console.log({ _, editor, setContent });
              // }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
          </WriteArea>
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
          <div style={{ padding: "50px 0" }}>
            <button
              onClick={addPost}
              className="buttonComplete"
              name="register"
              style={{ marginRight: "10px" }}
            >
              글 등록
            </button>
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
          </div>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

const WriteArea = styled.div`
  .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
    min-height: 300px;
  }
`;
// const sDatePicker = styled(DatePicker)`
//   padding: 5px;
// `;

export default WritePage;
