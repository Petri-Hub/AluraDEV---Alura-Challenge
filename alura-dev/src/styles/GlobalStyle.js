import { createGlobalStyle } from "styled-components";
import { resetCSS } from "./resetCss";
import { hljs } from "./HLJSTheme";

const GlobalStyle = createGlobalStyle`
    /* -------------- RESET CSS --------------- */

    ${resetCSS}

    /* --------------- MY CODE ---------------- */

    :root{
        --code_font: ${({ codeFont }) => codeFont};
        --default_font: ${({ defaultFont }) => defaultFont};
        --bg_color: ${({ bgColor }) => bgColor};
        --primary_color: ${({ primaryColor }) => primaryColor};
        --light_color: ${({ lightColor }) => lightColor};
        --dark_color: ${({ darkColor }) => darkColor};
    }

    *{
        font-family: var(--default_font);
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body{
        overflow-x: hidden;
        width: 100vw;
        background-color: rgba(var(--bg_color), 1);
        padding: 2rem 2rem 2rem 2rem;
    }

    .default-input{
        background-color: #FFFFFF29;
        border: none;
        border-radius: 8px;
        color: rgba(var(--light_color), 0.65);
        font-size: 16px;
        height: 56px;
        padding: 16px 14px;
        position: relative;
        width: 100%;
        transition: background 0.3s;

        &::placeholder{
            color: rgba(var(--light_color), 0.65);
        }
        &:hover{
            background-color: rgba(var(--light_color), 0.25);;
        }
    }

    .default-icon{
        border: none; 
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48px;
        height: 48px;
        transition: 0.3s;
    }

    .default-title{
        color: rgba(var(--light_color), 1);
        font-size: 12px;
        letter-spacing: 6px;
        margin-bottom: 16px;
        text-transform: uppercase;
    }

    .default-button{
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 16px;
        height: 56px;
        transition: 0.3s;
        width: 100%;
        color: rgba(var(--light_color), 1);
        background-color: rgba(var(--primary_color), 0.10);

        &:hover, &:focus{
            background-color: rgba(var(--primary_color), 0.16);
        }
        &:active{
            border: 4px solid rgba(var(--primary_color, 0.25));
        }
    }

    /* -------------- HLJS THEME -------------- */
    
    ${hljs}

    /* ---------------------------------------- */
`;

export default GlobalStyle;
