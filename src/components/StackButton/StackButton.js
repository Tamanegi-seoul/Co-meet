import { ToggleButton } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStack, deleteStack } from "../../store/stack";

const StackButton = ({ stack }) => {
  const dispatch = useDispatch();

  const [selectedCheck, setSelectedCheck] = useState(false);
  return (
    <ToggleButton
      sx={{ borderRadius: 10, marginRight: 2 }}
      value="check"
      selected={selectedCheck}
      onChange={() => {
        if (!selectedCheck) {
          dispatch(addStack({ stack: stack }));
          setSelectedCheck(!selectedCheck);
        }
        if (selectedCheck) {
          dispatch(deleteStack({ stack: stack }));
          setSelectedCheck(!selectedCheck);
        }
      }}
    >
      <img alt="" src={`img/${stack}.png`} />
      {stack}
    </ToggleButton>
  );
};

export default StackButton;
