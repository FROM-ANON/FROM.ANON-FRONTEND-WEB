import styled from "styled-components";
import { Row } from "./Div";
import Typo from "styles/Typo";
import { Palette } from "styles/Palette";

export const Notice = ({ text }: { text: string }) => {
    return (
        <Container>
            <Typo.s2 color={Palette.Gray50}>{text}</Typo.s2>
        </Container>
    );
};

const Container = styled(Row)`
    width: 100vw;
    height: 31px;
    align-items: center;
    justify-content: flex-start;

    padding: 0 63px;
    background: ${Palette.Gray10};
`;
