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
      <Footer />
    </div>
  );
};

const Contents = styled.div`
  width: 1000px;
  height: auto;
  margin: 0 auto;
`;

export default InformationEdit;
