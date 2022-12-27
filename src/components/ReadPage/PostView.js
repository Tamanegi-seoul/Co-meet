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

//게시물 작성 완료 페이지의 내용
const PostView = () => {
  const { post_id } = useParams();
  const dispatch = useDispatch();

  const [comment, setComment] = useState([]);

  useEffect(() => {
    dispatch(viewPostDetailAsync(post_id));

    axios({
      method: "get",
      url: `http://3.39.32.185:8080/api/post/search?post_id=${post_id}`,
    })
      .then(response => {
        setComment(response.data.data);
        console.log("게시글 가져오기 성공", response.data.data);
      })
      .catch(Error => {
        console.log("axios에러", Error);
      });
  }, []);

  return (
    <>
      <div>
        <h2 align="center">{comment.title}</h2>
      </div>
      <div id="content">
        <div className="TextBox">
          <div className="imagebox">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEwMThfMTI5%2FMDAxNjM0NTU2MDA4MDI3.zsBOZlr1ORTLG1JrR28FSt_UKlAbgTR2036EPOeSzfEg.9IXalR6AGH7G5i3j-Xjm1ht7-CFChgD2woGJDDWFN4Mg.JPEG.guskr0512%2FIMG_4659.JPG&type=sc960_832" />
          </div>
        </div>
        <div className="TextBox">{comment.poster_nickname}</div>
        <div className="TextBox">|</div>
        <div className="TextBox">{comment.created_date}</div>
      </div>
      <div>
        <hr></hr>
        <ul className="studyGrid">
          <li className="contentWrapper">
            <span className="title">모집 구분</span>
            <span className="title">{comment.recruit_status}</span>
          </li>
          <li className="contentWrapper">
            <span className="title">진행 방식</span>
            <span className="title">오프라인</span>
          </li>
          <li className="contentWrapper">
            <span className="title">모집 인원</span>
            <span className="title">{comment.recruit_capacity}</span>
          </li>
          <li className="contentWrapper">
            <span className="title">시작 예정</span>
            <span className="title">{comment.start_date}</span>
          </li>
          <li className="contentWrapper">
            <span className="title">연락 방법</span>
            <span className="title">{comment.start_date}</span>
          </li>
          <li className="contentWrapper">
            <span className="title">예상 기간</span>
            <span className="title">{comment.expected_term}</span>
          </li>
          <li className="contentWrapper">
            <span className="title">사용 언어</span>
            <span className="title"> {comment.designated_stacks} </span>
          </li>
        </ul>
      </div>
      <div className="postContentWrapper">
        <h2 className="postInfo">프로젝트 소개</h2>
        <hr></hr>
        <div className="postContent">{comment.content}</div>
        <PostComment comment={comment} />
        <Footer />
      </div>
    </>
  );
};

export default PostView;
