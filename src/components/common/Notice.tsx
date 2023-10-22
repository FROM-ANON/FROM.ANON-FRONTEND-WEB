import styled from "styled-components";
import { Row } from "./Div";
import Typo from "styles/Typo";
import noticeLogo from "assets/icons/notice-logo.svg";
import { Palette } from "styles/Palette";

export const Notice = ({ text }: { text: string }) => {
    return (
        <Container>
            <Img src={noticeLogo}></Img>
            <Typo.s2 color={Palette.Gray50}>{text}</Typo.s2>
        </Container>
    );
};

const Container = styled(Row)`
    height: 44px;
    align-items: center;
    justify-content: flex-start;

    padding: 0 41px;
    gap: 10px;

    background: ${Palette.Mandarin05};
`;
const Img = styled.img`
    width: 16.364px;
    height: 18px;
`;
