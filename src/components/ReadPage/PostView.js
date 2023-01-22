import React, { useEffect, useState } from "react";
import "./Post.css";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { viewPostDetailAsync } from "../../store/post/post";
import axios from "axios";
import PostComment from "./PostComment";
import ScrollTop from "../../scrollTop";
import styled from "styled-components";
import PostEdit from "./PostEdit";

//게시물 작성 완료 페이지의 내용
const PostView = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const MemberId = useSelector(state => state.user.memberId);
  console.log(MemberId);
  const [postContents, setPostContents] = useState([]);
  const [postIntroduce, setPostIntroduce] = useState();
  const [userImg, setUserImg] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const [responseCommentData, setResponseCommentData] = useState(null);

  useEffect(() => {
    dispatch(viewPostDetailAsync(postId));

    axios({
      method: "get",
      url: `http://3.39.32.185:8080/api/post/?postId=${postId}`,
    })
      .then(response => {
        setPostContents(response.data.data);
        setResponseCommentData(response.data.data.comments);
        setPostIntroduce(response.data.data.content);
        if (response.data.data.posterProfile) {
          setUserImg(
            `data:image/jpeg;base64,${response.data.data.posterProfile.imageData}`
          );
        }
        console.log("게시글 가져오기 성공", response.data.data);
      })
      .catch(Error => {
        console.log("axios에러", Error);
      });
  }, [dispatch, postId]);

  const stacks = [...new Set(postContents.designatedStacks)];

  return (
    <>
      <ScrollTop />
      <PostContent>
        <div className="writeTitle">
          <span>{postContents.title}</span>
        </div>
        <PostHeaderContainer>
          <div id="content">
            <div className="imagebox">
              <img className="userImg" src={userImg} alt="userProfileImg" />
            </div>
            <div className="userNickname">{postContents.posterNickname}</div>
            <div style={{ color: "grey" }}> | </div>
            <div className="createTime">
              {postContents.createdTime?.slice(0, 16)}
            </div>
          </div>
          <EditTool>
            {postContents.posterId === MemberId && (
              <PostEdit postContents={postContents} />
            )}
            {/* <PostEdit postContents={postContents} /> */}
          </EditTool>
        </PostHeaderContainer>
        <div>
          <hr></hr>
          <ul className="studyGrid">
            <li className="contentWrapper">
              <span className="title">모집 구분</span>
              <span className="postInfo">{postContents.groupType}</span>
            </li>
            <li className="contentWrapper">
              <span className="title">진행 방식</span>
              <span className="postInfo">
                {postContents.remote === true ? "온라인" : "오프라인"}
              </span>
            </li>
            <li className="contentWrapper">
              <span className="title">모집 인원</span>
              <span className="postInfo">{postContents.recruitCapacity}</span>
            </li>
            <li className="contentWrapper">
              <span className="title">시작 예정</span>
              <span className="postInfo">{postContents.startDate}</span>
            </li>
            <li className="contentWrapper">
              <span className="title">연락 방법</span>
              <span className="postInfo">{postContents.contact}</span>
            </li>
            <li className="contentWrapper">
              <span className="title">예상 기간</span>
              <span className="postInfo">{postContents.expectedTerm}일</span>
            </li>
            <li className="contentWrapper">
              <span className="title">사용 언어</span>
              <span className="postInfo">{stacks?.join(", ")}</span>
            </li>
          </ul>
        </div>
        <div className="postContentWrapper">
          <h2>프로젝트 소개</h2>
          <hr></hr>
          <div className="postContent">
            {postIntroduce?.replace(/(<([^>]+)>)/gi, "")}
          </div>
        </div>
        <PostComment commentData={responseCommentData} />
      </PostContent>
      <Footer />
    </>
  );
};

const PostHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EditTool = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostContent = styled.div`
  width: 900px;
  margin: 0 auto;
  padding: 60px 0;
`;

export default PostView;
