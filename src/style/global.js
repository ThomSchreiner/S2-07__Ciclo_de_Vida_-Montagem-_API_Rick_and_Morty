import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
        outline: none;
    }

    img {
        max-width: 100%;
    }

    ul, ol, li {
        list-style: none;
    }
    
    button {
        cursor: pointer;
    }
`