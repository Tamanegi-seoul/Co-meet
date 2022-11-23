import { textAlign } from "@mui/system";
import React from "react";
import "./Post.css";
import Header from "../Header";
import Footer from "../Footer";
import PostComent from "./PostComent";

//게시물 작성 완료 페이지의 내용
const PostView = () => {
  return (
    <>
      <Header />
      <div>
        <h2 align="center">[서울대입구역]오프라인 스터디원 모집합니다.</h2>
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
        <div className="TextBox">이름</div>
        <div className="TextBox">|</div>
        <div className="TextBox">2022.11.21(게시글작성날짜)</div>
      </div>

      <div>
        <hr></hr>
        <ul className="studyGrid">
          <li className="contentWrapper">
            <span className="title">모집 구분</span>
            <span className="title">프로젝트</span>
            {/* <span className="content">{read.post.type.label}</span> */}
          </li>
          <li className="contentWrapper">
            <span className="title">진행 방식</span>
            <span className="title">오프라인</span>
            {/* <span className="content">{read.post.onlineOrOffline.label}</span> */}
          </li>
          <li className="contentWrapper">
            <span className="title">모집 인원</span>
            <span className="title">인원 미정</span>
            {/* <span className="content">{read.post.recruits.label}</span> */}
          </li>
          <li className="contentWrapper">
            <span className="title">시작 예정</span>
            <span className="title">2022.12.01</span>
            {/* <span className="content">{formatDate(read.post.startDate)}</span> */}
          </li>
          <li className="contentWrapper">
            <span className="title">연락 방법</span>
            <span className="title">구글폼</span>
            {/* <ContactPoint
          contactPoint={read.post.contactPoint}
          contactType={read.post.contactType}
        /> */}
          </li>
          <li className="contentWrapper">
            <span className="title">예상 기간</span>
            <span className="title">장기</span>
            {/* <span className="content">{read.post.expectedPeriod.label}</span> */}
          </li>
          <li className="contentWrapper">
            <span className="title">사용 언어</span>
            {/* <ul className="languageList">
          {read.post.language.map((lang, i) => (
            <li key={i} className={styles.language}>
              <img
                className="languageImage"
                src={`/images/languages/${lang.value}.svg`}
                alt="language"
              />
            </li>
          ))}
        </ul> */}
          </li>
        </ul>
      </div>

      {/* 프로젝트 소개  */}

      <div className="postContentWrapper">
        <h2 className="postInfo">프로젝트 소개</h2>
        <hr></hr>
        <div
          className="postContent"
          // dangerouslySetInnerHTML={{ __html: read.post.content }}
        >
          게시글 내용
        </div>
        <PostComent />
        <Footer />
      </div>
    </>
  );
};

export default PostView;
