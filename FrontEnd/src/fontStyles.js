import { createGlobalStyle } from "styled-components";
import HelveticaUltraLt_0 from "./fonts/HelveticaUltraLt_0.ttf";

const FontStyles = createGlobalStyle`

    @font-face {
        font-family: 'HelveticaUltraLt_0';
        
        src: local('HelveticaUltraLt_0'), url(${HelveticaUltraLt_0}) format('ttf'),
    }
    `;

export default FontStyles;
