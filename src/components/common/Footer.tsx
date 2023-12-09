import { Column, Row } from "./Div";
import styled from "styled-components";
import { Img } from "./Img";
import { Palette } from "styles/Palette";
import Typo from "styles/Typo";
import { StyledLink } from "./Link";

export const Footer = () => {
    return (
        <Container>
            <Row gap={10} alignItems="center">
                <Img
                    src="/logotext.svg"
                    width={102}
                    height={23}
                    alt="logo text"
                />
                <Bar />
                <StyledLink to="/login/terms/privacy-policy">
                    <Typo.b4>개인정보처리방침</Typo.b4>
                </StyledLink>
                <Bar />
                <StyledLink to="/login/terms/use-policy">
                    <Typo.b4>이용약관</Typo.b4>
                </StyledLink>
            </Row>
            <Row gap={10} alignItems="center">
                <Typo.s4>이메일 : from.anonnn@gmail.com</Typo.s4>
                <Bar />
                <Typo.s4>Instagram : @from_anon</Typo.s4>
            </Row>
            <Row gap={10} alignItems="center">
                <Typo.s4>©FROM.ANON. ALL RIGHTS RESERVED</Typo.s4>
                <Bar />
                <Typo.s4>ver 1.0</Typo.s4>
            </Row>
        </Container>
    );
};

const Container = styled(Column)`
    height: 101px;
    justify-content: center;

    padding: 0 26px;

    backgroud: transparent;
    position: fixed;
    bottom: 0;
`;
const Bar = styled.div`
    width: 1px;
    height: 15px;
    background: ${Palette.Black};
`;
