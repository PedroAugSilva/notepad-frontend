import styled from "styled-components";

export const Main = styled.main`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  
  height: 100vh;
  width: 100vw;
  @media screen and (max-width: 719px) {
    flex-direction: column-reverse;
    justify-content: none;
  }
`;
export const TextEditor = styled.div`
  width: 83vw;
  height: 97vh;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.backgroundSecundary};
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 2rem;
  
  @media screen and (max-width: 1000px) and (min-width: 720px) {
    width: 78vw;
  }
  @media screen and (max-width: 719px) {
    width: 100vw;
    height: 100vh;
    padding-bottom: 5rem;
    border-radius: 0;
    margin: 0;
  }
`;
export const TextEditorTitle = styled.h1`
  font-size: 28pt;
`;
export const AlertTextarea = styled.div`
  width: 100%;
  height: 400px;
  align-items: center;
  display: flex;
  flex-direction: column;
  label {
    font-size: 20pt;
    color: ${(props) => props.theme.colors.alertSecundary};
  }
`;
export const Mask = styled.div`
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  @media screen and (max-width: 719px){
    display: flex;
  }
`
export const TextArea = styled.textarea`
    resize: none;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 14pt;
    background: none;
    color: ${props => props.theme.colors.fontPrimary};
    ::-webkit-scrollbar{
        width: 5px;
    }
    ::-webkit-scrollbar-thumb{
        background: #e6e6e6;
        border-radius: 5px;
    }
`
export const Input = styled.input`
  border: none;
  border-radius: 7px;
  background:none;
  width: 100%;
  height: 40px;
  outline: none;
  padding: 0px 10px;
  font-size: 13pt;
  transition: all 0.2s ease-in-out;
  font-size: 28pt;
  font-weight: 600;
  color: ${props => props.theme.colors.fontPrimary};
  ::placeholder{
    color: #808080;
    font-weight: 600;
  }
`;
export const ButtonSave = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    outline: none;
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.colors.buttonPrimary};
    color: #fff;
    border-radius: 50%;
    padding: 10px 0px ;
    transition: .2s ease-in-out;
    cursor: pointer;
    font-size: 20pt;
    :hover{
        background-color: ${props => props.theme.colors.buttonSecundary};
    }
    @media screen and (max-width: 719px){
        width: 50px;
        height: 50px;
        font-size: 21pt;
    }
    
`
