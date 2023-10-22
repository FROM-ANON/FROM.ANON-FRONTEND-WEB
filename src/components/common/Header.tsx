import Typo from "styles/Typo";
import { Row } from "./Div";
import styled from "styled-components";
import leftArrow from "assets/icons/left-arrow.svg";

export const Header = ({ type, text }: { type: string; text?: string }) => {
    return (
        <>
            {type === "main" ? (
                <Container justifyContent="center" alignItems="center">
                    <img src="/logotext-small.svg" alt="Logo" />
                </Container>
            ) : (
                <Container justifyContent="flex-start" alignItems="center">
                    <Sub>
                        <img src={leftArrow} alt="left arrow" />
                        <Typo.b4>{text}</Typo.b4>
                    </Sub>
                </Container>
            )}
        </>
    );
};

const Container = styled(Row)`
    height: 50px;
`;
const Sub = styled(Row)`
    padding: 0 31px;
    gap: 15px;
`;
