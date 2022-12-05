import styled from "styled-components";

export const ButtonStyle = styled.button`
    width: 100%;
    height: 40px;
    background-color: ${props => props.theme.colors.buttonPrimary};
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 7px;
    transition: .2s ease-in-out;
    font-size: 14pt;
    @media screen and (min-width: 1800px){
        height: 45px;
    }
    @media screen and (max-width: 719px) {
        height: 60px;
    }
    :hover{
        background-color: ${props => props.theme.colors.buttonSecundary};
    }
`