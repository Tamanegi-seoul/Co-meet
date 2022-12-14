import React, { useEffect, useState } from "react";
import "./Post.css";
import Header from "../Header";
import Footer from "../Footer";
// import PostComent from "./PostComent";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import post, { viewPostDetailAsync } from "../../store/post/post";
import axios from "axios";
import PostComment from "./PostComment";
import ScrollTop from "../../scrollTop";
import styled from "styled-components";
//게시물 작성 완료 페이지의 내용
const PostView = () => {
  const { post_id } = useParams();
  const dispatch = useDispatch();
  const [postContents, setPostContents] = useState([]);
  const [postIntroduce, setPostIntroduce] = useState();
  const [userImg, setUserImg] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const [CommentUserImg, setCommentUserImg] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const [responseCommentData, setResponseCommentData] = useState(null);

  useEffect(() => {
    dispatch(viewPostDetailAsync(post_id));

    axios({
      method: "get",
      url: `http://3.39.32.185:8080/api/post/search?post_id=${post_id}`,
    })
      .then(response => {
        setPostContents(response.data.data);
        setResponseCommentData(response.data.data.comments);
        setPostIntroduce(response.data.data.content);
        if (response.data.data.poster_profile) {
          setUserImg(
            `data:image/jpeg;base64,${response.data.data.poster_profile.image_data}`
          );
        }

        console.log("게시글 가져오기 성공", response.data.data);
      })
      .catch(Error => {
        console.log("axios에러", Error);
      });
  }, []);

  const stacks = postContents.designated_stacks;
  // const CommentData = response.data.data.comments;

  return (
    <>
      <ScrollTop />
      <PostContent>
        <div className="writeTitle">{postContents.title}</div>
        <div id="content">
          <div className="imagebox">
            <img className="userImg" src={userImg} alt="userProfileImg" />
          </div>
          <div className="userNickname">{postContents.poster_nickname}</div>
          <div style={{ color: "grey" }}> | </div>
          <div className="createTime">
            {postContents.created_time?.slice(0, 16)}
          </div>
        </div>
        <div>
          <hr></hr>
          <ul className="studyGrid">
            <li className="contentWrapper">
              <span className="title">모집 구분</span>
              <span className="postInfo">{postContents.recruit_status}</span>
            </li>
            <li className="contentWrapper">
              <span className="title">진행 방식</span>
              <span className="postInfo">
                {postContents.remote === true ? "온라인" : "오프라인"}
              </span>
            </li>
            <li className="contentWrapper">
              <span className="title">모집 인원</span>
              <span className="postInfo">{postContents.recruit_capacity}</span>
            </li>
            <li className="contentWrapper">
              <span className="title">시작 예정</span>
              <span className="postInfo">{postContents.start_date}</span>
            </li>
            <li className="contentWrapper">
              <span className="title">연락 방법</span>
              <span className="postInfo">{postContents.contact}</span>
            </li>
            <li className="contentWrapper">
              <span className="title">예상 기간</span>
              <span className="postInfo">{postContents.expected_term}일</span>
            </li>
            <li className="contentWrapper">
              <span className="title">사용 언어</span>
              <span className="postInfo">{`${stacks}`}</span>
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

const PostContent = styled.div`
  width: 900px;
  margin: 0 auto;
  padding: 60px 0;
`;

export default PostView;
