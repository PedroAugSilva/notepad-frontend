import styled from "styled-components";
import { motion } from "framer-motion";


export const Container = styled(motion.section)`
  width: 450px;
  height: 550px;
  background-color: ${({theme}) => theme.colors.backgroundPrimary};
  border-radius: 10px;
  transition: 0.1s;
  transition: opacity 0.5s;
  align-items: center;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 719px){
    width: 100%;
    height: 100%;
  }
`;
export const ImageContent = styled(motion.div)`
  width: 100%;
  height: 150px;
  background-image: linear-gradient(
    ${props => props.theme.colors.fontTertiary} 65%,
    transparent 50%,
    ${props => props.theme.colors.fontTertiary} 0%,
    transparent 0%
  );
  background-position-y: top;
  border-radius: 10px 10px 0 0;
  align-items: center;
  justify-content: center;
  display: flex;
  .info--area{
    margin-top: 60px;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 0px;
  }
  span{
    font-size: 15pt;
    color: ${({theme}) => theme.colors.fontPrimary};
  }
  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: ${props => props.theme.colors.profile};
    padding: 10px;
  }
`;
export const Items = styled(motion.ul)`
    padding: 2rem 1rem;
    width: 100%;
    height: 400px;
    border-radius: 0px 0px 10px 10px;
    align-items: center;
    display: flex;
    gap: 10px;
    flex-direction: column;
`
export const ButtonBack = styled(motion.button)`
  border: 0;
  outline: 0;
  background: 0;
  align-items: center;
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 22pt;
  cursor: pointer;
`
