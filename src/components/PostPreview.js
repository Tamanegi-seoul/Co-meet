import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
// Main page안의 카드 슬롯 형태

export default function BasicCard({
  title,
  start_date,
  designated_stacks,
  poster_nickname,
  post_id,
}) {
  const navigate = useNavigate();
  return (
    // <Link to={"/post/" + { post_id }}>
    // </Link>
    <Card
      onClick={() => {
        navigate("/post/" + post_id);
      }}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 10,
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
      <CardContent
        sx={{
          fontWeight: "900",
          borderBottom: "2px solid #F8F8F8",
        }}
      >
        Start Date : {start_date}
      </CardContent>
      <CardContent sx={{ lineHeight: "35px", cursor: "pointer" }}>
        Title : {title}
        <br />
        Stacks : {designated_stacks}
        <br />
        Name : {poster_nickname}
        <br />
        Post_Id:{post_id}
      </CardContent>
      <CardActions sx={{ borderTop: "2px solid #f8f8f8" }}>
        <Button size="small">사용자 프로필이 보일 에정입니다.</Button>
      </CardActions>
    </Card>
  );
}
