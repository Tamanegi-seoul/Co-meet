import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import axios from "axios";

// 내 정보 수정 화면에서 닉네임 부분
const UserName = () => {
  return (
    <>
      <UserNameWrapper>
        <h3 style={{ margin: "30px" }}>닉네임</h3>
        <input type="text" name="nickNameInput"></input>
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
    </>
  );
};

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
export default UserName;
