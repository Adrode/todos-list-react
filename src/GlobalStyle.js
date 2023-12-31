import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        max-width: 1000px;
        margin: 40px auto;
        padding: 0 20px;
        background-color: #eee;
        word-break: break-word;
    }
`;