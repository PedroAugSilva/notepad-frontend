import styled from "styled-components";

export const ButtonStyle = styled.button`
  border: none;
  background: none;
  width: 100%;
  height: 25px;
  color: ${(props) => props.theme.colors.fontSecundary};
  text-align: center;
  justify-content: space-between;
  padding: 0px 5px;
  font-size: 12pt;
  border-radius: 3px;
  cursor: pointer;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 5px;
  :hover,
  :focus {
    background-color: ${(props) => props.theme.colors.selectHover};
  }
  div{
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
`;
export const Delete = styled.button`
  border: 0;
  outline: none;
  background: none;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  font-size: 12pt;
  color: ${(props) => props.theme.colors.alertPrimary};
  float: right;
`;
