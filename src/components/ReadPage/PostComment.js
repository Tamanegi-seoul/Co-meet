import React, { useState } from "react";
import styled from "styled-components";
import { onErrorAlert } from "../Alert/Alert";
import "./Post.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import CommentEdit from "./CommentEdit";
import CommentList from "./CommentList";
import { style } from "@mui/system";

//게시물 작성 완료 페이지의 댓글창
// const PostComent = ({ content, setContent, onRegisterClick, count }) => {
const PostComment = ({ commentData }) => {
  // const navigate = useNavigate();
  const memberId = useSelector(state => state.user.memberId);
  const { postId } = useParams();
  // const dispatch = useDispatch();
  // const postListShow = useSelector(state => state.post.postListShow);
  // const [postList, setPostList] = useState([]);
  const [message, setMessage] = useState("");

  const handleMessage = event => {
    setMessage(event.target.value);
  };

  const addComment = () => {
    if (!memberId) {
      onErrorAlert("로그인을 먼저 해주세요!");
    } else {
      axios
        .post("http://3.39.32.185:8080/api/comment", {
          postId: postId,
          memberId: memberId,
          content: message,
        })
        .then(res => {
          window.location.reload();
        })
        .catch(err => console.log(err));
    }
  };

  const keydown = e => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter") {
      e.preventDefault();
      addComment();
    }
  };

  return (
    <div className="commentInput">
      <div style={{ fontSize: "22px", fontWeight: "bold", padding: "10px" }}>
        {commentData?.length}개의 댓글이 있습니다.
      </div>
      <textarea
        // ref={ref}
        className="commentText"
        placeholder="댓글을 입력하세요."
        value={message}
        onChange={handleMessage}
        onKeyDown={keydown}
      ></textarea>
      <div className="buttonWrapper">
        <button
          style={{ cursor: "pointer" }}
          className="buttonComplete"
          name="register"
          onClick={addComment}
        >
          댓글 등록
        </button>
      </div>
      <div>
        {/* 코맨트 렌더링 부분 */}
        {commentData
          ? commentData.map((comment, index) => {
              return (
                <>
                  <CommentList
                    comment={comment}
                    index={index}
                    memberId={memberId}
                  />
                </>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default PostComment;
