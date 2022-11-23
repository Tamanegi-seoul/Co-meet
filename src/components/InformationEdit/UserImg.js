import React, { useState, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
// 내 정보 수정 화면에서 이미지 부분

const UserImg = () => {
  const [Image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
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
          <ImageDelete>
            <label htmlFor="ex_file_delete">
              <div className="btn_delete">이미지 삭제</div>
            </label>
            <input
              type="file"
              id="ex_file_delete"
              // style={{ display: "none" }}
              accept="image/jpg,image/png,image/jpeg"
              name="profile_img"
              onChange={onChange}
              ref={fileInput}
            />
          </ImageDelete>
        </div>
      </ImgBox>
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
    padding: 5px 13px;
    margin-bottom: 10px;
    border-radius: 6px;
    text-align: center;
    line-height: 25px;
    background-color: tomato;
    font-size: 13px;
    vertical-align: middle;
    cursor: pointer;
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

const ImageDelete = styled.div`
  label {
    display: inline-block;
    padding: 4px 13px;
    border-radius: 6px;
    text-align: center;
    line-height: 25px;
    background-color: tomato;
    font-size: 13px;
    vertical-align: middle;
    cursor: pointer;
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
export default UserImg;
