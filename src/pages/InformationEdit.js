import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserImg from "../components/InformationEdit/UserImg";
import UserName from "../components/InformationEdit/UserName";
import UserStack from "./../components/InformationEdit/UserStack";

// 내정보 수정 페이지

const InformationEdit = () => {
  return (
    <div>
      <Header />
      <Contents>
        <h1>내 정보 수정</h1>
        <UserImg />
        <UserName />
        <UserStack />
        <button>완료</button>
        <button>회원탈퇴</button>
      </Contents>
      <EditButtons>
        <button className="save" name="save">
          완료
        </button>
        <button className="user_out" name="userOut">
          회원탈퇴
        </button>
      </EditButtons>
      <Footer />
    </div>
  );
};

const Contents = styled.div`
  width: 800px;
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
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
export default InformationEdit;
