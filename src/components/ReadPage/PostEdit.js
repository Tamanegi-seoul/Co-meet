import React from "react";
// import Axios from "axios";
// import styled from "styled-components";
// import { useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { BsFillPencilFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

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

    // Axios.patch("http://3.39.32.185:8080/api/post", AxiosData)
    //   .then(res => {
    navigate(`/write`, { state: { AxiosData } });
    // })
    // .catch(err => console.log("edit patch 실패", err));
  };

  return (
    <>
      <BsFillPencilFill
        size={18}
        style={{ paddingRight: "15px", cursor: "pointer" }}
        onClick={Edit}
      />
      <AiFillDelete size={20} style={{ cursor: "pointer" }} />
    </>
  );
};

export default PostEdit;
