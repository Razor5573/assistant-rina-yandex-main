import { createGlobalStyle } from 'styled-components';
import backgroundImg from './img/background.jpg';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: rgb(255,244,156);
        background: radial-gradient(circle, rgba(255,244,156,1) 0%, rgba(252,140,70,1) 100%);
        background-size: cover;
        font-family: Playfair Display, Roboto, Lora, Cormorant Garamond, sans-serif;
    }
`;

export default GlobalStyle;