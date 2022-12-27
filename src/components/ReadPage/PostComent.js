import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./Post.css";
import axios from "axios";

//게시물 작성 완료 페이지의 댓글창
// const PostComent = ({ content, setContent, onRegisterClick, count }) => {
const PostComent = ({ comment }) => {
  const [post_id, setPost_id] = useState([]);
  const [comment_id, setComment_id] = useState([]);
  const [content, setContent] = useState([]);
  const [post_title, setPost_title] = useState([]);
  const [commenter_id, setCommenter_id] = useState([]);
  const [commenter_nickname, setCommenter_nickname] = useState([]);

  const addComment = e => {
    e.preventDefault();
    axios
      .post(
        "http://3.39.32.185:8080/api/comment/register",
        {
          comment_id,
          post_id,
          post_title,
          commenter_id,
          commenter_nickname,
          content,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(res => console.log("post 가져오기 성공", res))
      .catch(err => console.log("post 에러", err));
  };

  const COMMETNS = comment.comments;

  return (
    <div className="commentInput">
      <div>{}개의 댓글이 있습니다.</div>
      <textarea
        className="commentText"
        placeholder="댓글을 입력하세요."
      ></textarea>
      <div className="buttonWrapper">
        <button onClick={addComment} className="buttonComplete" name="register">
          댓글 등록
        </button>
      </div>
      <div>
        {/* 코맨트 렌더링 부분 */}
        {COMMETNS
          ? COMMETNS.map((item, index) => {
              return (
                <>
                  <Section>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                      key={index}
                    >
                      <img src="/img/C.png" alt="사용자 이미지"></img>
                      <div>
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <div className="Name">{item.commenter_nickname}</div>
                          <div className="Time">
                            {item.created_time.slice(0, 10)}
                            &nbsp;
                            {item.created_time.slice(11, 16)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Section>
                  <p>{item.content}</p>
                </>
              );
            })
          : null}
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
