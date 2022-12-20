import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CommonTable from "../components/Table/CommonTable";
import CommonTableColumn from "../components/Table/CommonTableColumn";
import CommonTableRow from "../components/Table/CommonTableRow";
import { HiClipboardList } from "react-icons/hi";
import styled from "styled-components";
// 내작성글 리스트를 볼 수 있는 페이지

const MyPostList = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    setPostList(postList);
  }, []);

  return (
    <>
      <Header />
      <TableWrapper>
        <div
          style={{ display: "flex", justifyItems: "center", padding: "30px 0" }}
        >
          <span>
            <HiClipboardList style={{ width: "35px" }} size="30px" />
          </span>
          <span
            style={{
              display: "inline-block",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            내 작성글
          </span>
        </div>
        <CommonTable headersName={["글번호", "제목", "등록일"]}>
          <CommonTableRow>
            <CommonTableColumn>1</CommonTableColumn>
            <CommonTableColumn>첫번째 게시글입니다.</CommonTableColumn>
            <CommonTableColumn>2020-10-25</CommonTableColumn>
          </CommonTableRow>
          <CommonTableRow>
            <CommonTableColumn>2</CommonTableColumn>
            <CommonTableColumn>두번째 게시글입니다.</CommonTableColumn>
            <CommonTableColumn>2020-10-25</CommonTableColumn>
          </CommonTableRow>
          <CommonTableRow>
            <CommonTableColumn>3</CommonTableColumn>
            <CommonTableColumn>세번째 게시글입니다.</CommonTableColumn>
            <CommonTableColumn>2020-10-25</CommonTableColumn>
          </CommonTableRow>
          <CommonTableRow>
            <CommonTableColumn>4</CommonTableColumn>
            <CommonTableColumn>네번째 게시글입니다.</CommonTableColumn>
            <CommonTableColumn>2020-10-25</CommonTableColumn>
          </CommonTableRow>
          <CommonTableRow>
            <CommonTableColumn>5</CommonTableColumn>
            <CommonTableColumn>다섯번째 게시글입니다.</CommonTableColumn>
            <CommonTableColumn>2020-10-25</CommonTableColumn>
          </CommonTableRow>
        </CommonTable>
      </TableWrapper>
      <Footer />
    </>
  );
};

const TableWrapper = styled.div`
  width: 800px;
  margin: 0 auto;
`;
export default MyPostList;
