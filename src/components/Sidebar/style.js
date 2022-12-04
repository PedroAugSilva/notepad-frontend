import styled from "styled-components";

export const SidebarStyle = styled.nav`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 97vh;
  width: 15vw;
  padding: 7px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.backgroundSecundary};
  justify-content: space-between;
  
  @media screen and (max-width: 1000px) and (min-width: 720px) {
    width: 20vw;
    z-index: 1;
  }

  @media screen and (max-width: 719px) {
    display: none;
  }
`;


export const ButtonMoreOpitions = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  border: none;
  width: 30px;
  height: 30px;
  font-size: 30px;
  background: none;
  color: ${(props) => props.theme.colors.fontPrimary};
  cursor: pointer;
  @media screen and (max-width: 719px) {
    display: flex;
  }
`;
export const ButtonShowNotes = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  border: none;
  width: 30px;
  height: 30px;
  font-size: 30px;
  background: none;
  color: ${(props) => props.theme.colors.fontPrimary};
  cursor: pointer;
  @media screen and (max-width: 719px) {
    display: flex;
  }
`;