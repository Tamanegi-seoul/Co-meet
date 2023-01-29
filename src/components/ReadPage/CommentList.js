import React, { useRef } from "react";
import styled from "styled-components";
import CommentEdit from "./CommentEdit";
import { useState } from "react";
import Axios from "axios";

const CommentList = ({ comment, index, memberId }) => {
  const [editOpen, setEditOpen] = useState(false);
  const [inputEditHandle, setInputEditHandle] = useState("");
  const commentInput = useRef();

  const inputHandle = e => {
    if (comment.content) {
      comment.content = setInputEditHandle(e.target.value);
    }
    setInputEditHandle(e.target.value);
  };

  const contentInputCancel = () => {
    setEditOpen(false);
  };

  const contentInputHandle = () => {
    setEditOpen(true);
    editOpen == true && commentInput.current.focus();
  };

  //axios comment update - API PATCH
  const commentUpdate = () => {
    const UpdateData = {
      commentId: comment.commentId,
      content: inputEditHandle,
    };

    Axios.patch("http://3.39.32.185:8080/api/comment", UpdateData)
      .then(res => {})
      .catch(err => {
        console.log("comment update 실패", err);
      });
  };

  const commentKeyDown = e => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter") {
      e.preventDefault();
      commentUpdate();
    }
  };
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
                "data:image/jpeg;base64," + comment.commenterProfile?.imageData
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
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="Name">{comment.commenterNickname}</div>
              <div className="Time">
                {comment.createdTime.slice(0, 10)}
                &nbsp;
                {comment.createdTime.slice(11, 16)}
              </div>
            </div>
          </div>
        </div>
        {memberId == comment.commenterId && (
          <CommentEdit
            contentInputHandle={contentInputHandle}
            comment={comment}
          />
        )}
      </Section>
      <Comment>
        {editOpen ? (
          <div>
            <input
              className="input"
              type="text"
              value={comment.content}
              name="contentInput"
              onChange={inputHandle}
              onKeyDown={commentKeyDown}
              ref={commentInput}
            />
            <div className="editButtonHandle">
              <button onClick={contentInputCancel}>취소</button>
              <button className="complete" onClick={commentUpdate}>
                완료
              </button>
            </div>
          </div>
        ) : (
          <p>{comment.content}</p>
        )}
      </Comment>
    </>
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

const Comment = styled.div`
  input {
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
export default CommentList;
