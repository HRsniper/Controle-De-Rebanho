import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root {
    --white: #F8F8F2;
    --black: #282A36;
    --yellow: #ffff00;
    --green: #008000;
    --bluesky: #00bfff;
    --blue: #0000ff;
    --lightgray: #d3d3d3;
    --brown: #cd853f;

    font-size: 62.50%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: var(--black);
    background-color: var(--white);
  }

  body, input, button, select {
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
  }
`;
