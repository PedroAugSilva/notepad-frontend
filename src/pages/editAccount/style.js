import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
  align-items: center;
  justify-content: center;
  display: flex;
  z-index: 1;
`;
export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 7px;
  background: ${(props) => props.theme.colors.backgroundSecundary};
  color: ${({theme}) => theme.colors.fontPrimary};
  border: 2px solid ${({theme}) => theme.colors.borderThemeSelector};
  outline: 0;
  font-size: 14pt;
  padding: 5px 10px;
  transition: .2s ease-in-out;
  :focus{
    box-shadow: 0px 0px 5px -1px ${({theme}) => theme.colors.inputSecundary};
  }
`;
export const Buttons = styled.div`
  width: 100%;
  height: 60px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  button{
    width: 200px;
    height: 40px;
    border-radius: 7px;
    border: 0;
    outline: 0;
    font-size: 14pt;
    cursor: pointer;
  }
  .save{
    background: #71f;
    color: #fff;
  }
  .cancel{
    background-color: #f24;
    color: #fff;
  }

`
