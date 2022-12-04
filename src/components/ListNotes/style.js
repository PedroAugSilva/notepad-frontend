import styled from "styled-components";

export const List = styled.ul`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
  @media screen and (max-width: 719px) {
    padding: 1rem;
    z-index: 1;
    position: fixed;
    width: 360px;
    height: 0px;
    border-radius: 10px 10px 0px 0px;
    bottom: 60px;
    left: auto;
    background: ${(props) => props.theme.colors.navbarBackground};
    animation: showNotesResponsive 1s ease-out;
    animation-fill-mode: forwards;
    @keyframes showNotesResponsive {
      to {
        height: 400px;
      }
    }
  }
`;
export const ListItem = styled.li`
  list-style: none;
  width: 100%;
`;
export const SidebarTitle = styled.h2`
  font-size: 14pt;
  font-weight: 500;
  border-bottom: 1px solid ${(props) => props.theme.colors.alertSecundary};
  margin-bottom: 10px;
  width: 100%;
  color: ${(props) => props.theme.colors.fontTertiary};
`;
export const Button = styled.button`
    border: none;
    background-color: ${props => props.theme.colors.profileBackgroundPrimary};
    color: ${props => props.theme.colors.fontSecundary};
    width: 100%;
    height: 25px;
    border-radius: 5px;
    align-items: center;
    display: flex;
    padding: 0px 10px;
    flex-direction: row;
    gap: 5px;
    cursor: pointer;
    @media screen and (max-width: 719px) {
        position: absolute;
        width: 40px;
        height: 40px;
        right: 10px;
        bottom: 15px;
        padding: 0;
        font-size: 20px;
        border-radius: 50%;
        align-items: center;
        display: flex;
        justify-content: center;
        box-shadow: 5px 4px 5px -3px rgba(0,0,0,0.2);
        span{
            display: none;
        }
    }
`