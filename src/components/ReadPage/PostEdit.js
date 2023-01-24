// import React, { useState } from "react";
// import Axios from "axios";
// import styled from "styled-components";
// import { useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ModalDelete from "../Modal/ModalDelete";
import ModalRevise from "../Modal/ModalRevise";

const PostEdit = ({ postContents }) => {
  const navigate = useNavigate();

  // console.log("edit컴포넌트로 Props 받기 성공", postContents);
  const Edit = () => {
    const AxiosData = {
      postId: postContents.postId,
      title: postContents.title,
      content: postContents.content,
      recruitStatus: postContents.recruitStatus,
      groupType: postContents.groupType,
      recruitCapacity: postContents.recruitCapacity,
      remote: postContents.remote,
      contactType: postContents.contactType,
      contact: postContents.contact,
      startDate: postContents.startDate,
      expectedTerm: postContents.expectedTerm,
      designatedStacks: postContents.designatedStacks,
    };
    navigate(`/write`, { state: { AxiosData } });
    console.log(AxiosData);
  };

  const Delete = () => {
    axios({
      method: "delete",
      url: `http://3.39.32.185:8080/api/post/?postId=${postContents.postId}`,
    })
      .then(res => {
        console.log("delete 성공", res);
        navigate("/");
      })
      .catch(err => {
        console.log("delete에러", err);
      });
  };

  return (
    <>
      <ModalRevise Edit={Edit} />
      <ModalDelete Delete={Delete} />
    </>
  );
};

export default PostEdit;
