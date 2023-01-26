import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CommentEdit = ({ contentInputHandle, comment }) => {
  const CommentDelete = () => {
    axios({
      method: "delete",
      url: `http://3.39.32.185:8080/api/comment/?commentId=${comment.commentId}`,
    })
      .then(res => {
        // console.log("Comment delete 성공", res);
        window.location.reload();
      })
      .catch(err => {
        console.log("Comment delete에러", err);
      });
  };

  return (
    <Comment>
      <section className="editButton">
        <button onClick={contentInputHandle}>수정</button>
        <button onClick={CommentDelete}>삭제</button>
      </section>
    </Comment>
  );
};

const Comment = styled.div`
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
`;

export default CommentEdit;
