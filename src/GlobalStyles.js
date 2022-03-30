import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-size: 16px;
  }

  body {
    background-color: #a3e2f7;
    display: flex;
    flex-direction: column;
    align-items: center;
    }
`;

export default GlobalStyle;
