// 게시글 작성 완료 화면 => "수정"버튼을 눌렸을때 -> 모달창 -> 수정하시겠습니까?
// 게시글 작성 완료 화면 => 댓글 창에서 "수정"버튼을 눌렸을때 -> 모달창 -> 수정하시겠습니까?
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { BsFillPencilFill } from "react-icons/bs";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
};

const AnswerButton = styled.button`
  font-weight: bold;
  padding: 8px 20px;
  margin: 10px;
  border: none;
  border-radius: 20px;
`;

export default function ModalRevise({ Edit }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <BsFillPencilFill size={18} color={"#444"} />
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              style={{
                fontSize: "18px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              작성하신 글을 수정하시겠어요?
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ mt: 2 }}
              style={{ textAlign: "center" }}
            >
              <AnswerButton onClick={handleClose} style={{ cursor: "pointer" }}>
                아니요
              </AnswerButton>
              <AnswerButton
                style={{
                  backgroundColor: "#444",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={Edit}
              >
                네, 수정할래요
              </AnswerButton>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
