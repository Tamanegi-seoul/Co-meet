import React, { useState, useEffect } from "react";
import styled from "styled-components";

// 내 정보 수정 화면에서 비밀번호 부분

const UserPassword = () => {
  return (
    <>
      <UserPasswordWrapper>
        <h3 style={{ margin: "30px" }}>비밀번호</h3>
        <input type="text" name="nickNameInput"></input>
      </UserPasswordWrapper>
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
        비밀번호를 입력해주세요.
      </p>
    </>
  );
};

const UserPasswordWrapper = styled.div`
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
export default UserPassword;
