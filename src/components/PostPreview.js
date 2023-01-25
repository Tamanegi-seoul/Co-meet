import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../App.css";
// Main page안의 카드 슬롯 형태

export default function BasicCard({
  title,
  startDate,
  designatedStacks,
  posterNickname,
  postId,
}) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => {
        navigate("/post/" + postId);
      }}
      sx={{
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        borderRadius: 5,
        height: 350,
        margin: 1,
        paddingLeft: 1,
        width: {
          xs: "100%",
          sm: "100%",
          md: "47.2%",
          lg: "31.6%",
        },
      }}
    >
      <CardContent sx={{ lineHeight: "45px", cursor: "pointer" }}>
        <CardContainer>
          <Title size="small">
            <span>{posterNickname}</span>
            님이 연락을 원해요
          </Title>
          <div className="startDate">시작 예정일 | {startDate}</div>
          <div className="title">{title}</div>
          <Stack>
            <div className="stack">
              가능한 스택 | {[...new Set(designatedStacks)].join(",  ")}
            </div>
          </Stack>
        </CardContainer>
      </CardContent>
    </Card>
  );
}

const Title = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #5e6774;
  border-bottom: 1px solid #f1f1f1;

  span {
    font-weight: 700;
    font-size: 15px;
    color: rgb(61, 61, 61);
  }
`;

const CardContainer = styled.div`
  font-size: 14px;
  padding: 15px;
  font-family: Nunito-black;

  .startDate {
    color: gray;
    padding-top: 20px;
  }

  .title {
    font-weight: 700;
    font-size: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const Stack = styled.div`
  /* margin-top: 20px; */
  .stack {
    font-size: 14px;
    font-weight: 600;
    background: #fff;
    /* border: 1px solid #d1d5dd; */
    border-radius: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    /* padding: 10px; */
  }
`;
