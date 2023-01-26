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
import { useSelector } from "react-redux";
import { onErrorAlert } from "../components/Alert/Alert";
// import { deleteAsync, searchAsync } from "../store/user/user";
// import { loadPostListAsync } from "../store/post/post";
import axios from "axios";
// import { type } from "@testing-library/user-event/dist/type";
// 내작성글 리스트를 볼 수 있는 페이지

const MyPostList = () => {
  const navigate = useNavigate();
  const selectMemberId = useSelector(state => state.user.memberId);
  console.log(selectMemberId);
  const { memberId } = useParams();
  // const { posterId } = useParams();
  // const dispatch = useDispatch();
  // const postListShow = useSelector(state => state.post.postListShow);
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    if (!selectMemberId) {
      onErrorAlert("로그인을 먼저 해주세요!");
      navigate("/");
    } else {
      // dispatch(loadPostListAsync(posterId));
      // console.log(postListShow);

      // memberId를 통한 작성글 get
      axios({
        method: "get",
        url: `http://3.39.32.185:8080/api/post/my?memberId=${selectMemberId}`,
      }).then(res => {
        console.log(memberId);
        console.log(typeof memberId);
        console.log(res.data.data);
        if (!res.data.data.length) {
          setPostList(null);
        } else {
          console.log(res.data.data);
          setPostList(res.data.data);
        }
      });
    }
  }, [memberId, navigate, selectMemberId]);

  return (
    <>
      <Header />
      <TableWrapper>
        <div
          style={{
            display: "flex",
            justifyItems: "center",
            padding: "30px 10%",
          }}
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
        <CommonTable headersName={["제목", "등록일"]}>
          {postList ? (
            postList.map((item, index) => {
              return (
                <CommonTableRow key={index} props={item.postId}>
                  <CommonTableColumn>{item.title}</CommonTableColumn>
                  {/* <CommonTableColumn>{item.postId}</CommonTableColumn> */}
                  <CommonTableColumn>
                    {item.createdTime.slice(0, 10)}
                  </CommonTableColumn>
                </CommonTableRow>
              );
            })
          ) : (
            <div>
              <p style={{ textAlign: "center" }}>작성된 게시물이 없습니다!</p>
            </div>
          )}
        </CommonTable>
      </TableWrapper>
      <Footer />
    </>
  );
};

const TableWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;
export default MyPostList;
