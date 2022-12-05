import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const LoginArea = styled.div`
    width: 300px;
    height: 400px;
    background-color: ${props => props.theme.colors.backgroundSecundary};
    align-items: center;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 1rem;
    gap: 10px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0,0.1);
    @media screen and (min-width: 1800px){
      width: 350px;
      height: 450px;
    }
    @media screen and (max-width: 719px) {
      box-shadow: none;
      width: 95%;
      height: 100%;
    }
`
export const Title = styled.h2`
  color: ${props => props.theme.colors.fontSecundary};
  letter-spacing: 4px;
  margin: 10px 0px;
  @media screen and (min-width: 1800px){
    font-size: 21pt;
    margin: 1rem 0px;
  }
  @media screen and (max-width: 719px) {
      margin: 2rem 0;
      font-size: 20pt;
    }
`

export const LabelArea = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
`


export const Text = styled.label`
  font-size: 11pt;
  color: ${props => props.theme.colors.fontSecundary};
  a{
    text-decoration: none;
    color: ${props => props.theme.colors.fontSecundary};
    font-weight: 600;
    margin-left: 3px;
  }
`
export const Alert = styled.div`
    width: 250px;
    height: 70px;
    background-color: ${props => props.theme.colors.alertPrimary};
    border-radius: 10px;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    transition: .2s ease-in-out;
    animation: showAlert .7s ease-in-out;
    animation-fill-mode: forwards;
    transform: translateY(15px);
    opacity: 0;
    color: #fff;

    @keyframes showAlert {
        to{
            transform: translateY(0px);
            opacity: 1;
        }
    }
`
export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  background-color: ${({theme}) => theme.colors.inputPrimary};
  border-radius: 5px;
  padding: 0px 10px;
  font-size: 12pt;
  transition: .2s ease-in-out;
  :focus{
    box-shadow:0 0 10px -2px ${({theme}) => theme.colors.inputSecundary};
  }
  @media screen and (min-width: 1800px){
    height: 45px;
    font-size: 13pt;
  }
  @media screen and (max-width: 719px){
    height: 60px;
    font-size: 15pt;
  }
`;
