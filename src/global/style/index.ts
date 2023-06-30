import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    font-size: 14px;
    font-family: sans-serif;

    text-decoration: none;

    outline: none;
    box-sizing: border-box;
  }

  img, svg {
    width: 1rem;
    height: 1rem;
  }

  *::-webkit-scrollbar {
    width: .5rem;
    height: .5rem;

    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background: #ffffff09;
    border-radius: 5rem;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  color: #d4d4d4;
  background: #0c0c0c;
`;

export const MainContent = styled.div`
  width: 100%;
  height: 100%;
`;