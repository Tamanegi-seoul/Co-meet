import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CommonTable from "../components/Table/CommonTable";
import CommonTableColumn from "../components/Table/CommonTableColumn";
import CommonTableRow from "../components/Table/CommonTableRow";
import { HiClipboardList } from "react-icons/hi";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loadMorePostListAsync } from "../store/post/post";

// 내작성글 리스트를 볼 수 있는 페이지

const MyPostList = props => {
  const { member_id } = useParams();
  const dispatch = useDispatch();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function list() {
      try {
        const response = await axios.get(
          // `http://3.39.32.185:8080/api/post/search/by?member_id=${member_id}`
          `http://3.39.32.185:8080/api/post/search/by?member_id=3`
        );
        setPostList(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    // console.log(postList);
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
          {postList
            ? postList.map((item, index) => {
                return (
                  <CommonTableRow key={index}>
                    <CommonTableColumn>{item.no}</CommonTableColumn>
                    <CommonTableColumn>{item.title}</CommonTableColumn>
                    <CommonTableColumn>{item.createDate}</CommonTableColumn>
                  </CommonTableRow>
                );
              })
            : ""}
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
