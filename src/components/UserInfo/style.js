import styled  from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  background-color: ${props => props.theme.colors.profileBackgroundPrimary};
  width: 100%;
  height: 40px;
  margin-top: 10px;
  border-radius: 5px;
  padding: 0px 7px;
  gap: 5px;
  justify-content: space-between;
  bottom: 7px;
  color: ${props => props.theme.colors.fontPrimary};
  @media screen and (max-width: 719px){
    width: 100px;
    margin-top: 0;
    background: none;
    height: 35px;
    pointer-events: none;
    :active{
      background-color: ${props => props.theme.colors.profileBackgroundPrimary};
    }
 }
`;
export const Button = styled.button`
  border: none;
  background-color: ${props => props.theme.colors.profile};
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;
export const NameLabel = styled.label`
  font-size: 11pt;
`;
export const ButtonConfig = styled.button`
  border: none;
  background: none;
  width: 25px;
  font-size: 13pt;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
  color: ${props => props.theme.colors.fontPrimary}; 
`;
export const ButtonsConfigArea = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 719px){
    display: none;
 }
`;
export const UserArea = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
