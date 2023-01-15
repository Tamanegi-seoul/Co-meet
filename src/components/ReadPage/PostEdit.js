import React, { useEffect, useState } from "react";
import { Axios } from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BsFillPencilFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

const PostEdit = ({ postContents }) => {
  console.log("edit컴포넌트로 Props 받기 성공", postContents);
  const Edit = () => {
    Axios.patch(
      "http://3.39.32.185:8080/api/post",
      {
        postId: postContents.postId,
        title: postContents.title,
        content: postContents.content,
        recruitStatus: postContents.recruitStatus,
        groupType: postContents.groupType,
        recruitCapacity: postContents.recruitCapacity,
        contactType: postContents.contactType,
        contact: postContents.contact,
        startDate: postContents.startDate,
        expectedTerm: postContents.expectedTerm,
        designatedStacks: postContents.designatedStacks,
      }
      // {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // }
    )
      .then(res => {
        console.log("edit patch 성공", res);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <BsFillPencilFill
        size={18}
        style={{ paddingRight: "15px", cursor: "pointer" }}
      />
      <AiFillDelete size={20} style={{ cursor: "pointer" }} />
    </>
  );
};

export default PostEdit;
