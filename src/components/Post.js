import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard() {
  return (
    <Card
      sx={{
        width: {
          xs: "100%",
          sm: "50%",
          md: "33.33%",
        },
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          안녕하세요
        </Typography>
        <Typography variant="h5" component="div">
          만나서 반가워요
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          팀플같이해요
        </Typography>
        <Typography variant="body2">앞으로도 잘 부탁 드립니다.</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">여기는 버튼부분입니다</Button>
      </CardActions>
    </Card>
  );
}
