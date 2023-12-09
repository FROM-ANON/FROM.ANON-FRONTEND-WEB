import styled from "styled-components";
import { Row } from "./Div";
import Typo from "styles/Typo";
import { Palette } from "styles/Palette";

export const Toast = ({ text, show }: { text: string; show: boolean }) => {
    return (
        <Container show={show}>
            <Typo.b4 color={Palette.White}>{text}</Typo.b4>
        </Container>
    );
};

const Container = styled(Row)<{ show: boolean }>`
    width: calc(100% - 46px);
    height: 41px;
    align-items: center;
    justify-content: flex-start;

    margin: 0 23px;
    padding: 0 16px;

    border-radius: 15px;
    background: rgba(0, 0, 0, 0.45);

    position: fixed;
    bottom: 30px;
    left: 0px;
    z-index: 100000000;

    opacity: ${(props) => (props.show ? 1 : 0)};
    transition: opacity 0.8s ease-in-out;
`;
