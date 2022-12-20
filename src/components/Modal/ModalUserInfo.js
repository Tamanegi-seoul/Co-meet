// Main Header => 사용자 정보 이미지를 클릭했을때 나오는 모달창

import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import { logOutAsync2 } from "../../store/user/user";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250,
  height: 180,
  bgcolor: "background.paper",
  boxShadow: 5,
  borderRadius: "10px",
  p: 4,
};

export default function ModalUserInfo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const userInfo = useSelector(state => state.user.nickName);
  const memberId = useSelector(state => state.user.memberId);

  const buttons = [
    <Button key="one" onClick={() => navigate("/my_post_list/" + memberId)}>
      내작성글
    </Button>,
    <Button key="two" onClick={() => navigate("/information/" + memberId)}>
      설정
    </Button>,
    <Button
      key="three"
      onClick={() => {
        dispatch(logOutAsync2());
        navigate("/");
      }}
    >
      Logout
    </Button>,
  ];
  return (
    <div>
      <Button onClick={handleOpen}>{userInfo}</Button>
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
              id="transition-modal-description"
              style={{
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  "& > *": {
                    m: 1,
                  },
                }}
              >
                <ButtonGroup
                  orientation="vertical"
                  aria-label="vertical contained button group"
                  variant="text"
                  style={{ margin: "0 auto" }}
                >
                  {buttons}
                </ButtonGroup>
              </Box>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
