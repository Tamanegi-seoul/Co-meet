import { ConstructionRounded } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import Header from "../Header";
import "./Post.css";
import axios from "axios";

import { FaRegTrashAlt } from "react-icons/fa";

//게시물 작성 완료 페이지의 댓글창
// const PostComent = ({ content, setContent, onRegisterClick, count }) => {
const PostComent = () => {
  // 덧글 조회
  useEffect(() => {
    axios({
      method: "get",
      url: "http://3.39.32.185:8080/api/user/validate",
      responseType: "json",
    }).then(function (response) {
      console.log(response.data);
    });
  }, []);

  const [commentArray, setCommentArray] = useState([
    {
      id: 0, //사용자아이디
      content: "어렵네요", //댓글 내용
    },

    {
      id: 1, //사용자아이디
      content: "저 스터디 참여하고 싶습니다 ! ", //댓글 내용
    },
  ]);

  const removeComment = id => {
    setCommentArray(
      commentArray.filter(comment => {
        return comment.id !== id;
      })
    );
  };

  const [id, setId] = useState(2);

  const addComment = () => {
    setId(id + 1);
    const newComment = {
      id: id,
      content: comment,
    };
    setCommentArray([...commentArray, newComment]);
    setComment("");
  };

  const [comment, setComment] = useState();

  return (
    <div className="commentInput">
      <div className="feed-comment-list">
        {commentArray.map(comment => {
          return (
            <div key={comment.id}>
              {comment.id} {comment.content}
              <button
                style={{
                  border: "none",
                  backgroundColor: "white",
                  float: "right",
                }}
                onClick={() => removeComment(comment.id)}
              >
                <FaRegTrashAlt
                  className="comment-delete"
                  color="cornflowerblue"
                  size="16px"
                />
              </button>
            </div>
          );
        })}
      </div>
      <textarea
        className="commentText"
        placeholder="댓글을 입력하세요."
        value={comment}
        onChange={e => {
          setComment(e.target.value);
          // console.log({ id, setComment });
        }}
      ></textarea>
      <div className="buttonWrapper">
        <button
          onClick={addComment}
          className="buttonComplete"
          // className={styles.buttonComplete}
          name="register"
        >
          댓글 등록
        </button>
      </div>
    </div>
  );
};

export default PostComent;
