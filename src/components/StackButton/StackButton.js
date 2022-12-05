import { ToggleButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStack, deleteStack } from "../../store/stack/stack";

const StackButton = ({ stack }) => {
  const dispatch = useDispatch();
  const { stackList } = useSelector(state => state.stack);
  return (
    <ToggleButton
      sx={{ borderRadius: 10, marginRight: 2 }}
      value="check"
      selected={stackList.includes(`${stack}`) ? true : false}
      onChange={() => {
        if (!stackList.includes(`${stack}`)) {
          dispatch(addStack({ stack: stack }));
        }
        if (stackList.includes(`${stack}`)) {
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
