import { motion } from "framer-motion";
import styled from "styled-components";

export const Item = styled(motion.li)`
    list-style: none;
    background-color: ${({bgColor}) => bgColor};
    padding: 5px 1rem;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    border-radius: 7px;
    color: ${({fontColor}) => fontColor};
    cursor: pointer;
    label{
        font-size: 14pt;
    }
`
export const Content = styled(motion.div)`
    width: 100%;
    background: ${({theme}) => theme.colors.profileBackgroundPrimary};
    border-radius:  7px;
    align-items: center;
    display: flex;
    flex-direction: row;
    padding: 10px;
    gap: 1rem;
    overflow: hidden;
    
`