import { createGlobalStyle } from "styled-components";
import PretendardBold from "../assets/fonts/Pretendard-Bold.woff2";
import PretendardMedium from "../assets/fonts/Pretendard-Medium.woff2";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;

    @font-face {
        font-family: 'PretendardBold';
        src: local('PretendardBold'), url(${PretendardBold}) format('woff');
        font-style: normal;
    }
    @font-face {
        font-family: 'PretendardMedium';
        src: local('PretendardMedium'), url(${PretendardMedium}) format('woff');
        font-style: normal;
    }
}`;
