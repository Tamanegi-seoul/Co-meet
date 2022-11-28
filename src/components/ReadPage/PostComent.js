import { ConstructionRounded } from "@mui/icons-material";
import React, { useState } from "react";
import Header from "../Header";
import "./Post.css";
//게시물 작성 완료 페이지의 댓글창
// const PostComent = ({ content, setContent, onRegisterClick, count }) => {
const PostComent = () => {
  // class Comments extends React.Component {}

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

  const [id, setId] = useState(2);

  const addComment = () => {
    setId(id + 1);
    const newComment = {
      id: id,
      content: comment,
    };
    setCommentArray([...commentArray, newComment]);
  };

  const [comment, setComment] = useState();

  return (
    <div className="commentInput">
      <h1 className="commentCount">{id} 개의 댓글이 있습니다.</h1>
      <div className="feed-comment-list">
        {commentArray.map(comment => {
          return (
            <div key={comment.id}>
              {comment.id} {comment.content}
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
          console.log({ id, setComment }); //log..?
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
