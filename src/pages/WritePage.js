import { Grid } from "@mui/material";
import React, { useState } from "react";
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
import { useLocation, useNavigate } from "react-router-dom";
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

const stacks = [
  "JAVA",
  "JAVA_SCRIPT",
  "TYPE_SCRIPT",
  "PYTHON",
  "SPRING",
  "REACT",
  "R",
  "C",
  "C++",
  "GO",
  "SWIFT",
  "KOTLIN",
  "MYSQL",
  "MONGO_DB",
  "PHP",
  "FLUTTER",
  "REACT_NATVIE",
  "VUE",
  "NODE_JS",
  "NEXT_JS",
  "NEST_JS",
  "EXPRESS",
  "DJANGO",
  "GRAPH_QL",
  "FIREBASE",
  "UNITY",
  "AWS",
  "KUBERNETES",
  "DOCKER",
  "GIT",
  "FIGMA",
  "ZEPLIN",
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
  const [recruitCapacity, setRecruitCapacity] = useState(""); //모집인원
  const [remote, setRemote] = useState(""); //진행방식
  const [expectedTerm, setTerm] = useState(""); //진행기간
  const [startDate, setStartDate] = React.useState(null);
  const [contactType, setContactType] = useState("");
  const [contact, setContact] = useState("");
  const [groupType, setGroupType] = useState(""); //모집구분
  const [content, setContent] = useState(""); //내용
  const posterId = useSelector(state => state.user.memberId);
  const theme = useTheme();
  const [designatedStacks, setStack] = React.useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  // const [contentData, setContentData] = useState(setContent);

  const stackHandler = event => {
    const {
      target: { value },
    } = event;
    if (AxiosData.AxiosData.designatedStacks) {
      AxiosData.AxiosData.designatedStacks = event.target.value;
    }
    setStack(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  // 모집 인원
  const capacityHandler = e => {
    if (AxiosData.AxiosData.recruitCapacity) {
      AxiosData.AxiosData.recruitCapacity = e.target.value;
    }
    setRecruitCapacity(e.target.value);
    console.log(e.target.value);
  };

  const remoteHandler = e => {
    if (AxiosData.AxiosData.remote || e.target.value === true) {
      AxiosData.AxiosData.remote = e.target.value;
    }
    setRemote(e.target.value);
    console.log(e.target.value);
  };

  const termHandler = e => {
    if (AxiosData.AxiosData.expectedTerm) {
      AxiosData.AxiosData.expectedTerm = e.target.value;
    }
    setTerm(e.target.value);
    console.log(e.target.value);
  };

  const contact_typeHandler = e => {
    if (AxiosData.AxiosData.contactType) {
      AxiosData.AxiosData.contactType = e.target.value;
    }
    setContactType(e.target.value);
    console.log(e.target.value);
  };

  const contact_Handler = e => {
    if (AxiosData.AxiosData.contact) {
      AxiosData.AxiosData.contact = e.target.value;
    }
    setContact(e.target.value);
    console.log(e.target.value);
  };

  const group_type_Handler = e => {
    if (AxiosData.AxiosData.groupType) {
      AxiosData.AxiosData.groupType = e.target.value;
    }
    setGroupType(e.target.value);
    console.log(e.target.value);
  };

  const date_Hanler = newValue => {
    if (AxiosData.AxiosData.startDate) {
      AxiosData.AxiosData.startDate = newValue;
    }
    setStartDate(newValue);
    console.log(newValue);
  };

  const title_Handler = e => {
    if (AxiosData.AxiosData.title) {
      AxiosData.AxiosData.title = e.target.value;
    }
    setTitle(e.target.value);
    console.log(e.target.value);
  };

  const content_Handler = (e, editor) => {
    if (AxiosData.AxiosData.content) {
      AxiosData.AxiosData.content = editor.getData();
    }
    setContent(editor.getData());
    console.log(editor.getData());
    // Define your onSubmit function here
    // ...
    // for example, setData() here
  };

  //Data 받아오기
  const AxiosData = location.state;

  const EditPost = e => {
    const EditData = {
      postId: AxiosData.AxiosData.postId,
      title: AxiosData.AxiosData.title,
      content: AxiosData.AxiosData.content,
      recruitStatus: AxiosData.AxiosData.recruitStatus,
      groupType: AxiosData.AxiosData.groupType,
      recruitCapacity: AxiosData.AxiosData.recruitCapacity,
      remote: AxiosData.AxiosData.remote,
      contactType: AxiosData.AxiosData.contactType,
      contact: AxiosData.AxiosData.contact,
      startDate: AxiosData.AxiosData.startDate,
      expectedTerm: AxiosData.AxiosData.expectedTerm,
      designatedStacks: AxiosData.AxiosData.designatedStacks,
    };
    e.preventDefault();

    Axios.patch("http://3.39.32.185:8080/api/post", EditData)
      .then(res => {
        // console.log("patch 성공~", res.data.data);
        navigate("/post/" + res.data.data.postId);
      })
      .catch(err => console.log("edit patch 실패", err));
  };

  const addPost = e => {
    e.preventDefault();
    Axios.post(
      "http://3.39.32.185:8080/api/post",
      {
        title,
        content,
        groupType,
        contactType,
        contact,
        posterId, //user id
        startDate,
        expectedTerm,
        recruitCapacity,
        designatedStacks,
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
          //"Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    )
      .then(res => {
        console.log("게시글 등록됨", res);
        navigate("/post/" + res.data.data.postId);
      })
      .catch(err => console.log(err));
  };

  const back = e => {
    navigate(-1);
  };

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
                value={AxiosData ? AxiosData.AxiosData.groupType : groupType}
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
                value={
                  AxiosData
                    ? AxiosData.AxiosData.recruitCapacity
                    : recruitCapacity
                }
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
              <Select
                value={AxiosData ? AxiosData.AxiosData.remote : remote}
                label="form_how"
                onChange={remoteHandler}
              >
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
                value={
                  AxiosData ? AxiosData.AxiosData.expectedTerm : expectedTerm
                }
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
                value={
                  AxiosData
                    ? AxiosData.AxiosData.designatedStacks
                    : designatedStacks
                }
                onChange={stackHandler}
                input={<OutlinedInput label="Name" />}
                renderValue={selected => (
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 0.5,
                    }}
                  >
                    {selected.map((value, index) => (
                      <Chip key={index} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {stacks.map((option, index) => (
                  <MenuItem
                    key={index}
                    value={option}
                    style={getStyles(option, designatedStacks, theme)}
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
                  value={AxiosData ? AxiosData.AxiosData.startDate : startDate}
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
                value={
                  AxiosData ? AxiosData.AxiosData.contactType : contactType
                }
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
                value={AxiosData ? AxiosData.AxiosData.contact : contact}
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
            value={AxiosData ? AxiosData.AxiosData.title : title}
            onChange={title_Handler}
            placeholder="글 제목을 입력해주세요"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <WriteArea>
            <CKEditor
              editor={ClassicEditor}
              data={AxiosData ? AxiosData.AxiosData.content : content}
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
                // console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                // console.log("Focus.", editor);
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
            {AxiosData ? (
              <button
                onClick={EditPost}
                className="buttonComplete"
                name="register"
                style={{ marginRight: "10px" }}
              >
                게시글 수정
              </button>
            ) : (
              <button
                onClick={addPost}
                className="buttonComplete"
                name="register"
                style={{ marginRight: "10px" }}
              >
                글 등록
              </button>
            )}
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
