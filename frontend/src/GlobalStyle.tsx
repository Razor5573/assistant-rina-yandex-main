import { createGlobalStyle } from 'styled-components';
import backgroundImg from './img/background.jpg';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background: #edca95 no-repeat;
        background-size: cover;
        font-family: Playfair Display, Roboto, Lora, Cormorant Garamond, sans-serif;
    }
`;

export default GlobalStyle;