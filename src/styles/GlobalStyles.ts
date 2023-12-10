import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        font-family: 'Poppins', sans-serif;
        background-color: ${({theme}) => theme.colors.backgroundColor};
    }

`;


