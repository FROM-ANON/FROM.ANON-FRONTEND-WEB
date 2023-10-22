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
    width: calc(100% - 42px);
    height: 41px;
    align-items: center;
    justify-content: flex-start;

    margin: 0 22px;
    padding: 0 10px;

    border-radius: 5px;
    background: rgba(0, 0, 0, 0.25);

    position: fixed;
    bottom: 30px;
    left: 0px;

    opacity: ${(props) => (props.show ? 1 : 0)};
    transition: opacity 1s ease-in-out;
`;
