import React from "react";
import "./Post.css";
//게시물 작성 완료 페이지의 댓글창
// const PostComent = ({ content, setContent, onRegisterClick, count }) => {
const PostComent = () => {
  return (
    <div className="commentInput">
      <h1 className="commentCount">'count'개의 댓글이 있습니다.</h1>
      <textarea
        className="commentText"
        placeholder="댓글을 입력하세요."
        // value={content}
        // onChange={e => {
        //   setContent(e.target.value);
        // }}
      ></textarea>
      <div className="buttonWrapper">
        {/* <button
          onClick={onRegisterClick}
          className={styles.buttonComplete}
          name="register"
        > */}
        댓글 등록
        {/* </button> */}
      </div>
    </div>
  );
};

export default PostComent;
