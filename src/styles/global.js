import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:'Montserrat', sans-serif ;
}
body{
    width: 100vw;
    height: 100vh;
    background-color: ${(props) => props.theme.colors.backgroundPrimary};
    overflow: hidden;
    @media screen and (max-width: 719px){
        background-color: ${(props) => props.theme.colors.backgroundSecundary};
    }
}
`;
export default Global;
