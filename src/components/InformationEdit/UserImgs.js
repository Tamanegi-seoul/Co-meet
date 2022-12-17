import React, { useState, useRef, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { searchAsync, updateAsync } from "../../store/user/user";
// 내 정보 수정 화면에서 이미지 부분
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

const names = [
  "JAVA",
  "JAVA_SCRIPT",
  "REACT",
  "VUE",
  "PYTHON",
  "SPRING",
  "TYPE_SCRIPT",
  "ANGULAR",
  "CPP",
  "KOTILN",
  "SVELTE",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const UserImg = () => {
  const { member_id } = useParams();
  const dispatch = useDispatch();
  const nickName = useSelector(state => state.user.nickName);
  const email = useSelector(state => state.user.email);
  const userStack = useSelector(state => state.user.userStack);
  const theme = useTheme();
  const [personName, setPersonName] = useState(userStack);
  const [updateEmail, setUpdateEmail] = useState(email);
  const [updateNickName, setUpdateNickName] = useState(nickName);
  const [password, setPassword] = useState("");
  const [Image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  console.log(personName);
  console.log(nickName);
  useEffect(() => {
    dispatch(searchAsync(member_id));
  }, []);
  const handleChange = event => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  // 이밑에는 이미지관련?

  const fileInput = useRef(null);
  const onChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    } else {
      //업로드 취소할 시
      setImage(
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      );
      return;
    }

    //화면에 프로필 사진 표시
    // https://www.habonyphp.com/2019/03/js-api-filereader.html
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const deleteImage = () => {
    setImage(
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    );
  };
  return (
    <div>
      <ImgBox>
        <Avatar
          src={Image}
          style={{ margin: "20px" }}
          // size={200}
          sx={{ width: 160, height: 160 }}
          onClick={() => {
            fileInput.current.click();
          }}
        />
        <div className="btns">
          <ImageInput>
            <label htmlFor="ex_file">
              <div className="btn_select">이미지 선택</div>
            </label>
            <input
              type="file"
              id="ex_file"
              // style={{ display: "none" }}
              accept="image/jpg,image/png,image/jpeg"
              name="profile_img"
              onChange={onChange}
              ref={fileInput}
            />
          </ImageInput>
          <ImageDelete onClick={deleteImage}>이미지 삭제</ImageDelete>
        </div>
      </ImgBox>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="이메일"
        value={updateEmail}
        onChange={event => {
          setUpdateEmail(event.target.value);
        }}
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="nickName"
        label="닉네임"
        value={updateNickName}
        onChange={event => {
          setUpdateNickName(event.target.value);
        }}
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="password"
        label="비밀번호"
        value={password}
        onChange={event => {
          setPassword(event.target.value);
        }}
        autoFocus
      />
      {/* 여기 밑에는 스택리스트 칩입니다 */}
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={selected => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map(value => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {names.map(name => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div style={{ display: "flex", justifyContent: "start" }}>
        <button
          onClick={() => {
            const data = {
              member_id: member_id,
              new_password: password,
              new_nickname: nickName,
              updated_stacks: personName,
            };
            console.log(data);
            const formData = new FormData();
            formData.append(
              "request",
              new Blob([JSON.stringify(data)], {
                type: "application/json",
              })
            );
            dispatch(updateAsync(formData));
          }}
        >
          저장
        </button>
        <button>회원탈퇴</button>
      </div>
    </div>
  );
};

const ImgBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
  .btns {
    padding-top: 60px;
  }
`;

const ImageInput = styled.div`
  label {
    display: inline-block;
    padding: 0.7em 1em;
    margin-bottom: 10px;
    border-radius: 6px;
    text-align: center;
    /* line-height: 25px; */
    color: white;
    background-color: #99cff7;
    font-size: 13px;

    vertical-align: middle;
    cursor: pointer;
    &:hover {
      color: #0273d6;
      transition: ease-out 0.2s;
      background-position: 99% 50%;
    }
  }
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

const ImageDelete = styled.button`
  display: inline-block;
  padding: 0.7em 1em;
  border-radius: 0;
  /* color: #b2876f; */
  /* font-size: 0.678rem; */
  color: gray;
  text-decoration: none;

  background-position: 1% 50%;
  background-size: 400% 300%;
  border: 0;
  border-radius: 6px;

  &:hover {
    color: white;
    transition: ease-out 0.2s;
    background-position: 99% 50%;
  }
`;
export default UserImg;
