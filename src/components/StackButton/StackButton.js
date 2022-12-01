import { ToggleButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStack, deleteStack } from "../../store/stack";

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
    >
      <img alt="" src={`img/${stack}.png`} />
      {stack}
    </ToggleButton>
  );
};

export default StackButton;
