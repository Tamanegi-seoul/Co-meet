import { textAlign } from "@mui/system";
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
import { autoBatchEnhancer } from "@reduxjs/toolkit";

//게시물 작성 완료 페이지의 내용
const PostView = () => {
  const { post_id } = useParams();
  const dispatch = useDispatch();
  const [postContents, setPostContents] = useState([]);
  const [postIntroduce, setPostIntroduce] = useState();
  const [userImg, setUserImg] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );

  useEffect(() => {
    dispatch(viewPostDetailAsync(post_id));

    axios({
      method: "get",
      url: `http://3.39.32.185:8080/api/post/search?post_id=${post_id}`,
    })
      .then(response => {
        setPostContents(response.data.data);
        setPostIntroduce(response.data.data.content);
        if (response.data.data.poster_profile) {
          setUserImg(
            `data:image/jpeg;base64,${response.data.data.poster_profile.image_data}`
          );
        }

        // console.log(response.data.data.poster_profile.image_data);
        console.log("게시글 가져오기 성공", response.data.data);
      })
      .catch(Error => {
        console.log("axios에러", Error);
      });
  }, []);

  return (
    <>
      <div>
        <h2 align="center">{postContents.title}</h2>
      </div>
      <div id="content">
        <div className="TextBox">
          <div className="imagebox">
            <img
              src={userImg}
              style={{ height: "100%", margin: "0 auto" }}
              alt="userProfileImg"
            />
          </div>
        </div>
        <div className="TextBox">{postContents.poster_nickname}</div>
        <div className="TextBox"> | </div>
        <div className="TextBox">{postContents.created_time}</div>
      </div>
      <div>
        <hr></hr>
        <ul className="studyGrid">
          <li className="contentWrapper">
            <span className="title">모집 구분</span>
            <span className="title">{postContents.recruit_status}</span>
          </li>
          <li className="contentWrapper">
            <span className="title">진행 방식</span>
            <span className="title">오프라인</span>
          </li>
          <li className="contentWrapper">
            <span className="title">모집 인원</span>
            <span className="title">{postContents.recruit_capacity}</span>
          </li>
          <li className="contentWrapper">
            <span className="title">시작 예정</span>
            <span className="title">{postContents.start_date}</span>
          </li>
          <li className="contentWrapper">
            <span className="title">연락 방법</span>
            <span className="title">{postContents.contact}</span>
          </li>
          <li className="contentWrapper">
            <span className="title">예상 기간</span>
            <span className="title">{postContents.expected_term}일</span>
          </li>
          <li className="contentWrapper">
            <span className="title">사용 언어</span>
            <span className="title"> {postContents.designated_stacks} </span>
          </li>
        </ul>
      </div>
      <div className="postContentWrapper">
        <h2 className="postInfo">프로젝트 소개</h2>
        <hr></hr>
        <div className="postContent">
          {postIntroduce.replace(/(<([^>]+)>)/gi, "")}
        </div>
        <PostComment comment={postContents} />
        <Footer />
      </div>
    </>
  );
};

export default PostView;
