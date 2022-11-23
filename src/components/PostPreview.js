import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
// Main page안의 카드 슬롯 형태

export default function BasicCard() {
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
        안녕하세요 만나서 반가워요 팀플같이해요 앞으로도 잘 부탁 드립니다.
      </CardContent>
      <CardActions>
        <Button size="small">여기는 버튼부분입니다</Button>
      </CardActions>
    </Card>
  );
}
