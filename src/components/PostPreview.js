import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
// Main page안의 카드 슬롯 형태

export default function BasicCard({
  title,
  start_date,
  designated_stacks,
  poster_nickname,
}) {
  return (
    <Card
      sx={{
        height: 400,
        margin: 1,
        width: {
          xs: "100%",
          sm: "100%",
          md: "47.2%",
          lg: "31.6%",
        },
      }}
    >
      <CardContent>
        시작 예정일:{start_date}
        <br />
        제목: {title}
        <br />
        스택: {designated_stacks}, 닉네임:{poster_nickname}
      </CardContent>
      <CardActions>
        <Button size="small">여기는 버튼부분입니다</Button>
      </CardActions>
    </Card>
  );
}
