import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import styled from "styled-components";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ userDelete }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const DeleteBtn = styled.button`
    background: #ff3217;
    color: #fff;
    border-radius: 4px;
    width: 100px;
    margin-right: 10px;
    height: 2rem;
    font-size: 1rem;
    border: 0;
    cursor: pointer;
  `;
  return (
    <div>
      <DeleteBtn variant="outlined" onClick={handleClickOpen}>
        회원탈퇴
      </DeleteBtn>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle style={{ padding: "40px 50px 0px 50px" }}>
          {"CO-MEET과 헤어지시겠어요?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            style={{ padding: "20px 30px" }}
          >
            작성하신 글과 회원정보 모두 삭제됩니다 :&#40;
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ padding: "0 30px 20px 0px" }}>
          <Button onClick={handleClose}>아니요</Button>
          <Button onClick={userDelete}>네, 탈퇴할게요.</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
