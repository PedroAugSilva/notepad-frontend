import styled from "styled-components";
import { motion } from "framer-motion";

export const NavbarStyle = styled.nav`
  display: none;
  width: 360px;
  border-radius: 10px;
  height: 60px;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) => props.theme.colors.navbarBackground};
  position: fixed;
  bottom: 10px;
  @media screen and (max-width: 719px) {
    display: flex;
  } 
`;
export const NavbarItemInput = styled.input`
  display: none;
  :nth-of-type(1):checked ~ div {
    left: 34px;
    width: 50px;
  }
  :nth-of-type(2):checked ~ div {
    left: 155px;
    width: 50px;
  }
  
`;
export const ItemLabel = styled.label`
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 20pt;
  z-index: 1;
  color: ${(props) => props.theme.colors.fontPrimary};
`;
export const NavbarIndicator = styled(motion.div)`
  position: absolute;
  left: 34px;
  width: 50px;
  height: 40px;
  border-radius: 10px;
  transition: 0.5s ease-in-out;
  box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme.colors.navbarIndicator};
`;
