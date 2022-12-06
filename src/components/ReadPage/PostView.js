import { textAlign } from "@mui/system";
import React, { useEffect } from "react";
import "./Post.css";
import Header from "../Header";
import Footer from "../Footer";
import PostComent from "./PostComent";
import dummyPost from "../../dummyPost/dummyPost.json";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { viewPostDetailAsync } from "../../store/post/post";

//게시물 작성 완료 페이지의 내용
const PostView = () => {
  const { post_id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(viewPostDetailAsync(post_id));
  }, []);
  return (
    <>
      <div>
        <h2 align="center">{dummyPost.data[0].title}</h2>
      </div>

      <div id="content">
        <div className="TextBox">
          <div className="imagebox">
            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEwMThfMTI5%2FMDAxNjM0NTU2MDA4MDI3.zsBOZlr1ORTLG1JrR28FSt_UKlAbgTR2036EPOeSzfEg.9IXalR6AGH7G5i3j-Xjm1ht7-CFChgD2woGJDDWFN4Mg.JPEG.guskr0512%2FIMG_4659.JPG&type=sc960_832" />
          </div>
        </div>

        <div className="TextBox">{dummyPost.data[0].poster_nickname}</div>

        <div className="TextBox">|</div>

        <div className="TextBox">{dummyPost.data[0].created_date}</div>
      </div>

      <div>
        <hr></hr>
        <ul className="studyGrid">
          <li className="contentWrapper">
            <span className="title">모집 구분</span>

            <span className="title">{dummyPost.data[0].recruit_status}</span>
          </li>
          <li className="contentWrapper">
            {/* // ?? */}
            <span className="title">진행 방식</span>
            <span className="title">오프라인</span>
          </li>
          <li className="contentWrapper">
            <span className="title">모집 인원</span>

            <span className="title">{dummyPost.data[0].recruit_capacity}</span>
          </li>
          <li className="contentWrapper">
            <span className="title">시작 예정</span>

            <span className="title">{dummyPost.data[0].start_date}</span>
          </li>
          <li className="contentWrapper">
            <span className="title">연락 방법</span>

            <span className="title">{dummyPost.data[0].start_date}</span>
          </li>
          <li className="contentWrapper">
            <span className="title">예상 기간</span>

            <span className="title">{dummyPost.data[0].expected_term}</span>
          </li>
          <li className="contentWrapper">
            <span className="title">사용 언어</span>

            <span className="title">
              {" "}
              {dummyPost.data[0].designated_stacks}{" "}
            </span>

            {/* {read.post.language.map((lang, i) => (
            <li key={i} className={styles.language}>
              <img
                className="languageImage"
                src={`/images/languages/${lang.value}.svg`}
                alt="language"
              />
            </li> */}
          </li>
        </ul>
      </div>

      {/* 프로젝트 소개  */}

      <div className="postContentWrapper">
        <h2 className="postInfo">프로젝트 소개</h2>
        <hr></hr>

        <div className="postContent">{dummyPost.data[0].content}</div>

        <PostComent />
        <Footer />
      </div>
    </>
  );
};

export default PostView;
