import React from "react";
import styled from "styled-components";

const Spinner = process.env.PUBLIC_URL + "/img/load.gif";

const Loading = () => {
  return (
    <LoadingContainer>
      <img src={Spinner} alt="로딩중" />
    </LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 15%;
  height: 15%;
  margin: 0 auto;
  margin-top: 20px;
`;

export default Loading;
