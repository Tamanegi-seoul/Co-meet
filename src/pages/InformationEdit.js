import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserImg from "../components/InformationEdit/UserImg";
// 내정보 수정 페이지

const InformationEdit = () => {
  return (
    <div>
      <Header />
      <Contents>
        <h1>내 정보 수정</h1>
        <UserImg />
      </Contents>
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
export default InformationEdit;
