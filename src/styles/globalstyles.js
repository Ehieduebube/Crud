import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Nunito', sans-serif;
    background-color: #ffffff;
    width: 1000px;
    font-size: 16px;
    font-weight: 400;  
    line-height: 1.5;
    letter-spacing: 0.02em;  
  }
`;

export default GlobalStyle;
