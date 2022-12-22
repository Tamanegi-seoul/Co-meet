import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CommonTable from "../components/Table/CommonTable";
import CommonTableColumn from "../components/Table/CommonTableColumn";
import CommonTableRow from "../components/Table/CommonTableRow";
import { HiClipboardList } from "react-icons/hi";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onErrorAlert, onSuccessAlert } from "../components/Alert/Alert";
import { deleteAsync, searchAsync } from "../store/user/user";
import { loadPostListAsync } from "../store/post/post";
import axios from "axios";
// 내작성글 리스트를 볼 수 있는 페이지

const MyPostList = () => {
  const navigate = useNavigate();
  const memberId = useSelector(state => state.user.memberId);
  const { member_id } = useParams();
  const { poster_id } = useParams();
  const dispatch = useDispatch();
  const postListShow = useSelector(state => state.post.postListShow);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    if (!memberId) {
      onErrorAlert("로그인을 먼저 해주세요!");
      navigate("/");
    } else {
      // dispatch(loadPostListAsync(poster_id));
      // console.log(postListShow);

      // memberId를 통한 작성글 get
      axios({
        method: "get",
        url: `http://3.39.32.185:8080/api/post/search/by?member_id=3`,
      }).then(res => {
        console.log(res.data.data);
        setPostList(res.data.data);
        // function isMemberId(el) {
        //   if (el.poster_id === "member_id") {
        //     return;
        //   }
        // }
        // const myList = postListShow.filter(isMemberId);
        // console.log(myList);
        // dispatch(loadPostListAsync(poster_id)).then(res => {
        //   console.log(postListShow);
        //   console.log(res.data);
        // });
      });
    }
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
                  <CommonTableRow
                    key={index}
                    onClick={() => {
                      navigate("/post/" + item.post_id);
                    }}
                  >
                    <CommonTableColumn>{item.post_id}</CommonTableColumn>
                    <CommonTableColumn>{item.title}</CommonTableColumn>
                    <CommonTableColumn>
                      {item.created_time.slice(0, 10)}
                    </CommonTableColumn>
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
