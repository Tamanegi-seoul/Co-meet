import { ToggleButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStack, deleteStack } from "../../store/post/post";
const StackButton = ({ stack }) => {
  const dispatch = useDispatch();
  const stackLists = useSelector(state => state.post.stackList);
  const postListShow = useSelector(state => state.post.postListShow);
  return (
    <ToggleButton
      sx={{ borderRadius: 10, marginRight: 2 }}
      value="check"
      selected={stackLists.includes(`${stack}`) ? true : false}
      onChange={() => {
        if (!stackLists.includes(`${stack}`)) {
          dispatch(addStack({ stack: stack }));
          console.log(postListShow);
        }
        if (stackLists.includes(`${stack}`)) {
          dispatch(deleteStack({ stack: stack }));
        }
      }}
      style={{ marginBottom: "10px" }}
    >
      <img
        alt=""
        src={`img/${stack}.png`}
        style={{ width: "30px", height: "30px" }}
      />
      {stack}
    </ToggleButton>
  );
};

export default StackButton;
