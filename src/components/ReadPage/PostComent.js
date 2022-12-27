import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { onErrorAlert } from "../Alert/Alert";
import "./Post.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";

//게시물 작성 완료 페이지의 댓글창
// const PostComent = ({ content, setContent, onRegisterClick, count }) => {
const PostComent = ({ comment }) => {
  const navigate = useNavigate();
  const memberId = useSelector(state => state.user.memberId);
  const { post_id } = useParams();
  const dispatch = useDispatch();
  const postListShow = useSelector(state => state.post.postListShow);
  // const [postList, setPostList] = useState([]);

  const addComment = e => {
    e.preventDefault();
    if (!memberId) {
      onErrorAlert("로그인을 먼저 해주세요!");
    } else {
      Axios.post(
        "http://3.39.32.185:8080/api/comment/register",
        {
          post_id: post_id,
          member_id: 5,
          content: "",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then(res => console.log("post 댓글 등록됨", res))
        .catch(err => console.log(err));
    }
  };

  // const [comment, setComment] = useState([]);

  // 덧글 post
  // useEffect(() => {
  //   if (!memberId) {

  //     <Button
  //     key="three"
  //     onClick={() => {
  //       dispatch(logOutAsync2());
  //       navigate("/");
  //     }}
  //   >

  //     onErrorAlert("로그인을 먼저 해주세요!");
  //   } else {
  // axios({
  //   method: 'post',
  //   url: "http://3.39.32.185:8080/api/comment/register",
  //   data: {
  //     comment_id,
  //     post_id,
  //     post_title,
  //     commenter_id,
  //     commenter_nickname,
  //     content,
  //     // firstName: 'Fred',
  //     // lastName: 'Flintstone'
  //   }

  //     Axios.post(
  //       "http://3.39.32.185:8080/api/comment/register",
  //       {
  //         comment_id,
  //         post_id,
  //         post_title,
  //         commenter_id,
  //         commenter_nickname,
  //         content,
  //       },
  //       {
  //         headers: {
  //           //       "Access-Control-Allow-Origin": "*",
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //       .then(res => console.log("댓글 등록됨", res))
  //       .catch(err => console.log(err));
  //   }
  // }, []);

  const COMMETNS = comment.comments;

  return (
    <div className="commentInput">
      <div>{}개의 댓글이 있습니다.</div>
      <textarea
        className="commentText"
        placeholder="댓글을 입력하세요."
      ></textarea>
      <div className="buttonWrapper">
        <button className="buttonComplete" name="register" onClick={addComment}>
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
