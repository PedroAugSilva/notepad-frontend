import styled from "styled-components";
import { motion } from "framer-motion";

export const Selector = styled(motion.label)`
  width: 130px;
  height: 130px;
  background: none;
  border-radius: 20px;
  padding: 1rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all .2s ease-in-out;
  color: ${({theme}) => theme.colors.fontPrimary};
  border: 2px solid ${({theme}) => theme.colors.borderThemeSelector};
  input {
    display: none;
  }
  input:checked + .label::after {
    opacity: 1;
  }
  input:checked + .label{
    border-color: #71f;
  }
  .label{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid ${({theme}) => theme.colors.borderThemeSelector};
    align-items: center;
    justify-content: center;
    display: flex;
  }
  .label::after{
    content: '';
    opacity: 0;
    position: absolute;
    width: 12px;
    height: 12px;
    background: #71f;
    border-radius: 50%;
    transition: all .2s ease-in-out ;
  }

  .theme {
    align-items: center;
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 10px;
  }
  figure {
    width: 100%;
    height: auto;
    img {
      width: 100%;
      height: auto;
    }
  }
  :nth-child(${({theme}) => theme.title === 'light' ? '1' : '2'}){
    border-color :#71f;
  }
`;
