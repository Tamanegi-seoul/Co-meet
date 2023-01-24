import React, { useState } from "react";
import styled from "styled-components";
import { onErrorAlert } from "../Alert/Alert";
import "./Post.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Axios from "axios";
import CommentEdit from "./CommentEdit";

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
  const [editOpen, setEditOpen] = useState(false);

  const contentInputHandle = () => {
    setEditOpen(true);
  };

  const contentInputCancel = () => {
    setEditOpen(false);
  };

  const handleMessage = event => {
    setMessage(event.target.value);
  };

  const addComment = () => {
    if (!memberId) {
      onErrorAlert("로그인을 먼저 해주세요!");
    } else {
      Axios.post(
        "http://3.39.32.185:8080/api/comment",
        {
          postId: postId,
          memberId: memberId,
          content: message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
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

  // console.log(comment.comments[0].commenter_profile.image_data);

  // const CommentImg = `data:image/jpeg;base64,${comment.commenter_profile.image_data}`;

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
                  <Section style={{ paddingTop: "15px" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                      key={index}
                    >
                      {comment.commenterProfile ? (
                        <img
                          src={
                            "data:image/jpeg;base64," +
                            comment.commenterProfile?.imageData
                          }
                          alt="사용자 이미지"
                        />
                      ) : (
                        <img
                          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                          alt="사용자 이미지"
                        />
                      )}
                      <div>
                        <div
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <div className="Name">
                            {comment.commenterNickname}
                          </div>
                          <div className="Time">
                            {comment.createdTime.slice(0, 10)}
                            &nbsp;
                            {comment.createdTime.slice(11, 16)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <CommentEdit />
                    <section className="editButton">
                      <button onClick={contentInputHandle}>수정</button>
                      <button>삭제</button>
                    </section>
                  </Section>
                  <Comment>
                    <p>{comment.content}</p>
                    {/* {수정 버튼 누르고 난 뒤} */}
                    {editOpen && (
                      <div>
                        <input
                          className="input"
                          type="text"
                          value={comment.content}
                          name="contentInput"
                        />
                        <div className="editButtonHandle">
                          <button onClick={contentInputCancel}>취소</button>
                          <button className="complete">완료</button>
                        </div>
                      </div>
                    )}
                  </Comment>
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

  .editButton {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      background: inherit;
      border: none;
      box-shadow: none;
      overflow: visible;
      padding: 7px;
      cursor: pointer;
    }
  }

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

const Comment = styled.div`
  .input {
    width: 100%;
    border-radius: 8px;
    padding: 8px 12px;
    border: 1px solid #e1e1e1;
    outline: none;
  }

  .editButtonHandle {
    display: flex;
    justify-content: start;
    align-items: center;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #e9ecef;
      padding: 13px;
      cursor: pointer;
      border-radius: 4px;
      width: 60px;
      height: 1.5rem;
      margin-bottom: 10px;
      margin-top: 10px;
      margin-right: 10px;
      outline: none;
      border: 0px solid #ccc;
      font-weight: bold;
    }
    .complete {
      background-color: black;
      color: white;
    }
  }
`;

export default PostComment;
