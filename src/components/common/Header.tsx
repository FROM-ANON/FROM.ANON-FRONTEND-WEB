import Typo from "styles/Typo";
import { Row } from "./Div";
import styled from "styled-components";
import leftArrow from "assets/icons/left-arrow.svg";
import { useNavigate } from "react-router-dom";
import { Img } from "./Img";

export const Header = ({
    type,
    text,
    bgcolor,
}: {
    type: string;
    text?: string;
    bgcolor?: string;
}) => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <>
            {type === "main" ? (
                <Container
                    justifyContent="center"
                    alignItems="center"
                    backgroundColor={bgcolor}
                >
                    <Img
                        src="/logotext.svg"
                        width={102}
                        height={23}
                        alt="Logo"
                    />
                </Container>
            ) : (
                <Container
                    justifyContent="flex-start"
                    alignItems="center"
                    backgroundColor={bgcolor}
                >
                    <Sub>
                        <Img
                            onClick={handleBack}
                            src={leftArrow}
                            width={7}
                            height={12.6}
                            alt="left arrow"
                        />
                        <Typo.b4>{text}</Typo.b4>
                    </Sub>
                </Container>
            )}
        </>
    );
};

const Container = styled(Row)`
    height: 70px;
`;
const Sub = styled(Row)`
    padding: 0 31px;
    gap: 15px;

    align-items: center;
`;
