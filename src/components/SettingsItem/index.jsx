import React, { useState, useContext } from "react";

import { Item, Content } from "./style";
import { IoIosArrowForward } from "react-icons/io";
import { AnimatePresence } from "framer-motion";
import { ThemeContext } from "styled-components";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SettingsItems = ({ opition, children }) => {
  const [trigger, setTrigger] = useState();
  const { colors } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { signout } = useAuth();

  const handleItem = () => {
    switch (opition) {
      case "Log out":
        signout();
        navigate('/')
        break;
      case "Theme":
        setTrigger(!trigger);
        break;
      case "Account settings":
        navigate("/home/settings/user");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Item
        onClick={handleItem}
        isToggle={trigger}
        bgColor={
          opition === "Log out" ? "#f24" : colors.profileBackgroundPrimary
        }
        fontColor={opition === "Log out" ? "#fff" : colors.fontPrimary}
      >
        <label>{opition}</label>
        {children && (
          <IoIosArrowForward
            fontSize={25}
            color={colors.fontSecundary}
            style={{ transform: trigger ? "rotate(90deg)" : "rotate(0)", transition: '.2s ease-in-out' }}
          />
        )}
      </Item>
      <AnimatePresence>
        {trigger && (
          <Content
            layout
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 150, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {children}
          </Content>
        )}
      </AnimatePresence>
    </>
  );
};

export default SettingsItems;
