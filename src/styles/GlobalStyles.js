import { createGlobalStyle } from "styled-components";
import { colors } from "./theme";

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
    }
    body {
        background: ${colors.black};
        color: ${colors.lightGray};
        height: 100vh;
        margin: 0 auto;
        max-width: 500px;
        overscroll-behavior: none; 
    }

    #root {
        box-shadow: 0 0 10px rgba(0, 0, 0, .1);
        overflow-x: hidden;
        min-height: 99vh;
        padding-bottom: 10px;
    }

    ul, li, h1, h2, h3, p, button, a {
        margin:0;
        padding: 0;
    } 
    ul { list-style: none}
    button { 
        background: transparent;
        border:0;
        outline: 0;
    }
    input {
        box-sizing: border-box
    }

    ::-webkit-scrollbar-track {
        background: ${colors.darkGray};
    }

    ::-webkit-scrollbar {
        height: 16px;
        background-color: ${colors.black};
    }

    ::-webkit-scrollbar-thumb {
        height: 8px;
        background-color: ${colors.lightGray};
    }
`;
