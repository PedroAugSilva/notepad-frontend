import React from "react";
import { Container, ImageContent, Items, ButtonBack } from "./style";
import useAuth from "../../hooks/useAuth";
import { BsArrowLeftCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import userImage from "../../assets/user-image.png";

const SettingsApp = ({ children, backTo }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <Container
      layout
      initial={{ transform: "translateY(200px)", opacity: 0 }}
      animate={{ transform: "translateY(0px)", opacity: 1 }}
      exit={{ transform: "translateY(-200px)", opacity: 0 }}
      transition={{ type: "spring" }}
    >
      <ButtonBack onClick={() => navigate(backTo)}>
        <BsArrowLeftCircle />
      </ButtonBack>
      <ImageContent>
        <div className="info--area">
          <img src={userImage} alt="" />
          <span>{user[0] ? user[0].name : "loading..."}</span>
        </div>
      </ImageContent>

      <Items>{children}</Items>
    </Container>
  );
};

export default SettingsApp;
