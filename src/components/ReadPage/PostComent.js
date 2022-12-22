import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./Post.css";

//게시물 작성 완료 페이지의 댓글창
// const PostComent = ({ content, setContent, onRegisterClick, count }) => {
const PostComent = ({ comment }) => {
  // 덧글 조회
  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "http://3.39.32.185:8080/api/comment/search?post_id=5",
  //     responseType: "json",
  //   }).then(function (response) {
  //     console.log(response.data);
  //   });
  // }, []);

  const Name = comment.data.comments[0].commenter_nickname;
  const Time = comment.data.comments[0].created_time;
  const Content = comment.data.comments[0].content;

  return (
    <div className="commentInput">
      <div>{}개의 댓글이 있습니다.</div>
      <textarea
        className="commentText"
        placeholder="댓글을 입력하세요."
      ></textarea>
      <div className="buttonWrapper">
        <button className="buttonComplete" name="register">
          댓글 등록
        </button>
      </div>
      <div>
        {/* 코맨트 렌더링 부분 */}
        <Section>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src="/img/C.png" alt="사용자 이미지"></img>
            <div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="Name">{Name}</div>
                <div className="Time">{Time}</div>
              </div>
            </div>
          </div>
        </Section>
        <p>{Content}</p>
      </div>
    </div>
  );
};

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;

  img {
    display: block;
    width: 52px;
    height: 52px;
    margin-right: 16px;
    border-radius: 50%;
    object-fit: cover;
  }

  .Name {
    color: #333;
    font-weight: 700;
  }

  .Time {
    font-size: 14px;
    line-height: 126.5%;
    letter-spacing: -0.005em;
    color: #9f9f9f;
  }
`;

export default PostComent;
