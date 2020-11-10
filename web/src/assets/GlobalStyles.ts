import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    :root {
        --white: #ffffff;
        --bg: #ebf2f5;
        --bga: #ebf2f5e6;
        --yellow: #ffd666;
        --brown: #8d734b;
        --cyan : #96feff;
        --blue: #15c3D6;
        --blue-dark: #12afcb;
        --green: #37c77f;
        --green-hover: #3ee08f;
        --red: #ff669d;
        --titles: #4d6f80;
        --inputs: #f5f8fa;
        --border: #d3e2e5;
        --text-gray: #8fa7b2;
        --text-blue: #0089a5;

        --green-low: #edfff6;
        --border-green-low: #a1e9c5;

        --blue-low: #d1edf2;
        --border-blue-low: #b3dae2;

        --red-low: #ffe4ee;
        --border-red-low: #ffbcd4;

        --gradient-blue0: #29B6D1;
        --gradient-blue100: #00C7C7;

        font-size: 62.50%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
/*
    body {
        color: var(--white);
        background-color: var(--bg);
    }

    body, input, button, textarea {
        font-family: sans-serif;
        font-weight: 600;
        font-size: 18px;
    } */
`;
