// Main Header => 사용자 정보 이미지를 클릭했을때 나오는 모달창

import React, { useState } from "react";
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
import axios from "axios";
import styled from "styled-components";
import { BsFillCaretDownFill } from "react-icons/bs";

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

const Img = styled.div`
  display: flex;
  align-items: center;

  img {
    display: block;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    object-fit: cover;
    transition: all 0.125s ease-in 0s;
  }
`;

export default function ModalUserInfo({ userData }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const userInfo = useSelector(state => state.user.nickName);
  const memberId = useSelector(state => state.user.memberId);
  const [userImg, setUserImg] = useState();

  axios({
    method: "get",
    url: `http://3.39.32.185:8080/api/member?memberId=${memberId}`,
  })
    .then(res => {
      // console.log("get 성공", res.data.data);
      setUserImg(res.data.data.profileImage.imageData);
    })
    .catch(err => {
      console.log("get err", err);
    });

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
      <Button
        style={{
          fontSize: "16px",
          fontWeight: "900",
          marginRight: "100px",
        }}
        onClick={handleOpen}
      >
        <Img>
          {!userImg ? (
            <img
              src={
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              alt="사용자 이미지"
            />
          ) : (
            <img
              src={"data:image/jpeg;base64," + userImg}
              alt="사용자 이미지"
            />
          )}
          <BsFillCaretDownFill
            size="10"
            style={{ marginLeft: "5px", color: "#868e96" }}
          />
        </Img>
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
