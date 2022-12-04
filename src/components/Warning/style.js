import styled from "styled-components";
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
    width: 100%;
    border-radius: 7px;
    overflow: hidden;
    background-color: ${(props) => props.theme.colors.selectHover};
    /* background: #212; */
    align-items: flex-start;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    label{
        color: ${props => props.theme.colors.fontSecundary};
    }
    .buttons{
        align-items: center;
        display: flex;
        flex-direction: row;
        gap: 5px;
        width: 100%;
        button{
            border: 0;
            outline: 0;
            border-radius: 5px;
            width: 70px;
            height: 20px;
            cursor: pointer;
        }
        .confirm{
            background-color: #25CF60;
            color: #fff;
        }
        .cancel{
            background-color: ${props => props.theme.colors.alertPrimary};
            color: #fff;
        }
    }
  
`;
