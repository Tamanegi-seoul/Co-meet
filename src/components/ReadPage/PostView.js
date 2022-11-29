import { textAlign } from "@mui/system";
import React from "react";
import "./Post.css";
import Header from "../Header";
import Footer from "../Footer";
import PostComent from "./PostComent";
import dummy from "./PostData.json";

//게시물 작성 완료 페이지의 내용
const PostView = () => {
  return (
    <>
      <div>
        {dummy.data.map(data => (
          <h2 align="center">{data.title}</h2>
        ))}
      </div>

      <div id="content">
        <div className="TextBox">
          <div className="imagebox">
            <img
              class="profile"
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTEwMThfMTI5%2FMDAxNjM0NTU2MDA4MDI3.zsBOZlr1ORTLG1JrR28FSt_UKlAbgTR2036EPOeSzfEg.9IXalR6AGH7G5i3j-Xjm1ht7-CFChgD2woGJDDWFN4Mg.JPEG.guskr0512%2FIMG_4659.JPG&type=sc960_832"
            />
          </div>
        </div>
        {dummy.data.map(data => (
          <div className="TextBox">{data.poster_nickname}</div>
        ))}

        <div className="TextBox">|</div>
        {dummy.data.map(data => (
          <div className="TextBox">{data.created_date}</div>
        ))}
      </div>

      <div>
        <hr></hr>
        <ul className="studyGrid">
          <li className="contentWrapper">
            <span className="title">모집 구분</span>
            {dummy.data.map(data => (
              <span className="title">{data.recruit_status}</span>
            ))}
          </li>
          <li className="contentWrapper">
            {/* // ?? */}
            <span className="title">진행 방식</span>
            <span className="title">오프라인</span>
          </li>
          <li className="contentWrapper">
            <span className="title">모집 인원</span>
            {dummy.data.map(data => (
              <span className="title">{data.recruit_capacity}</span>
            ))}
          </li>
          <li className="contentWrapper">
            <span className="title">시작 예정</span>
            {dummy.data.map(data => (
              <span className="title">{data.start_date}</span>
            ))}
          </li>
          <li className="contentWrapper">
            <span className="title">연락 방법</span>
            {dummy.data.map(data => (
              <span className="title">{data.start_date}</span>
            ))}
          </li>
          <li className="contentWrapper">
            <span className="title">예상 기간</span>
            {dummy.data.map(data => (
              <span className="title">{data.expected_term}</span>
            ))}
          </li>
          <li className="contentWrapper">
            <span className="title">사용 언어</span>
            {dummy.data.map(data => (
              <span className="title"> {data.designated_stacks} </span>
            ))}
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
        {dummy.data.map(data => (
          <div className="postContent">{data.content}</div>
        ))}
        <PostComent />
        <Footer />
      </div>
    </>
  );
};

export default PostView;
