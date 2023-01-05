import React, { useState, useRef } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAsync, searchAsync, updateAsync } from "../../store/user/user";
import { useEffect } from "react";
import { onErrorAlert, onSuccessAlert } from "../Alert/Alert";
//-------------------------------------------------------------스택관련 함수
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
  "KOTILIN",
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

//------------------------------------------------------------------
// 내 정보 수정 화면에서 이미지 부분

const UserImg = () => {
  const navigate = useNavigate();
  const memberId = useSelector(state => state.user.memberId);
  const { member_id } = useParams();
  const dispatch = useDispatch();
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [updateNickName, setUpdateNickName] = useState("");
  const [sendImage, setSendImage] = useState(null);
  const [Image, setImage] = useState({
    image_data:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  });

  useEffect(() => {
    if (!memberId) {
      onErrorAlert("로그인을 먼저 해주세요!");
      navigate("/");
    }
    dispatch(searchAsync(member_id)).then(res => {
      setUpdateNickName(res.payload.nickname);
      setPersonName(res.payload.prefer_stacks);
      if (res.payload.profile_image) {
        setImage(
          `data:image/jpeg;base64,${res.payload.profile_image.image_data}`
        );
      }
      console.log(Image);
    });
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
  //--------------------스택관련 위 아래는 이미지관련

  const fileInput = useRef(null);

  const onChange = e => {
    if (e.target.files[0]) {
      setImage({ image_file: e.target.files[0] });
      setSendImage(e.target.files[0]);
    } else {
      //업로드 취소할 시
      setImage({
        image_data:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      });
      return;
    }
    //화면에 프로필 사진 표시
    // https://www.habonyphp.com/2019/03/js-api-filereader.html
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
        console.log(Image);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const deleteImage = () => {
    setImage({
      image_data:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    });
    setSendImage(null);
  };
  return (
    <div>
      <ImgBox>
        <Avatar
          src={Image}
          style={{ margin: "20px", cursor: "pointer" }}
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
              accept="image/jpg,image/png,image/jpeg"
              name="profile_img"
              onChange={onChange}
              ref={fileInput}
            />
          </ImageInput>
          <ImageDelete onClick={deleteImage}>이미지 삭제</ImageDelete>
        </div>
      </ImgBox>
      <UserNameWrapper>
        <h3 style={{ margin: "30px" }}>닉네임</h3>
        <TextField
          margin="normal"
          required
          id="nickName"
          label="닉네임"
          value={updateNickName}
          onChange={event => {
            setUpdateNickName(event.target.value);
          }}
          autoFocus
        />
      </UserNameWrapper>
      <p
        style={{
          color: "#868e96",
          fontSize: ".875rem",
          paddingTop: "15px",
          paddingLeft: "30px",
          paddingBottom: "15px",
          borderBottom: "1px solid grey",
        }}
      >
        Co-meet에서 사용되는 이름입니다.
      </p>
      <TechWrapper>
        <h3>관심 기술 태그</h3>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">TechStack</InputLabel>
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
      </TechWrapper>
      <p
        style={{
          color: "#868e96",
          fontSize: ".875rem",
          paddingTop: "15px",
          paddingLeft: "30px",
          paddingBottom: "15px",
          borderBottom: "1px solid grey",
        }}
      >
        관심 있는 기술 태그를 입력해주세요.
      </p>

      <div style={{ display: "flex", justifyContent: "start" }}>
        <EditButtons>
          <button
            className="save"
            name="save"
            onClick={() => {
              const data = {
                member_id: member_id,
                new_nickname: updateNickName,
                updated_stacks: personName,
              };
              const formData = new FormData();
              formData.append(
                "request",
                new Blob([JSON.stringify(data)], {
                  type: "application/json",
                })
              );

              formData.append("image", sendImage);
              dispatch(updateAsync(formData)).then(() => {
                onSuccessAlert("수정완료되었습니다");
                navigate("/");
              });
            }}
          >
            완료
          </button>
          <button
            className="user_out"
            name="userOut"
            onClick={() => {
              dispatch(deleteAsync(member_id)).then(() => {
                onSuccessAlert("탈퇴완료");
                navigate("/");
              });
            }}
          >
            회원탈퇴
          </button>
        </EditButtons>
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
    /* width: 100px;
    height: 25px; */
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
const UserNameWrapper = styled.div`
  display: flex;
  align-items: center;
  h3 {
    width: 20rem;
  }
  input {
    border-radius: 4px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    width: 18rem;
    min-height: 3rem;
    padding: 1rem;
  }
`;
const TechWrapper = styled.div`
  display: flex;
  align-items: center;
  h3 {
    width: 20rem;
    margin: 30px;
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    padding: 20px;
  }
`;
const EditButtons = styled.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  .save {
    background-color: #262626;
    font-weight: 700;
    color: #fff;
    border-radius: 4px;
    width: 100px;
    margin-right: 10px;
    height: 2rem;
    font-size: 1rem;
    border: 0;
    cursor: pointer;
  }
  .user_out {
    background: #ff3217;
    color: #fff;
    border-radius: 4px;
    width: 100px;
    margin-right: 10px;
    height: 2rem;
    font-size: 1rem;
    border: 0;
    cursor: pointer;
  }
`;
export default UserImg;
