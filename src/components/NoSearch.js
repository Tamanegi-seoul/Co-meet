import React from "react";
import styled from "styled-components";
const Box = styled.div`
  width: 100%;
  text-align: center;
  background-color: skyblue;
`;
export default function NoSearch() {
  return <Box>검색결과 조건에 맞는 글이 아직 없습니다</Box>;
}
