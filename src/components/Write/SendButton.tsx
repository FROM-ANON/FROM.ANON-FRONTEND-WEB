import { StyledButton } from "components/common/Button";
import styled from "styled-components";
import Typo from "styles/Typo";
import { useRecoilValue } from "recoil";
import { WriteMailState } from "recoil/atom";
import { Palette } from "styles/Palette";
import { Row } from "components/common/Div";
import { useNavigate } from "react-router-dom";

export const SendButton = () => {
    const navigate = useNavigate();
    const writeState = useRecoilValue(WriteMailState);
    const handleClick = () => {
        if (writeState.text) {
            navigate("/send/success");
        }
    };

    return (
        <Container>
            <Button isEmpty={!writeState.text} onClick={handleClick}>
                <Typo.b3>전송하기</Typo.b3>
            </Button>
        </Container>
    );
};

const Container = styled(Row)`
    width: 100vw;
    height: 109px;

    align-items: center;
    justify-content: center;

    background: rgba(255, 255, 255, 0.8);

    position: fixed;
    bottom: 0;
`;

const Button = styled(StyledButton)<{ isEmpty: boolean }>`
    background: ${(props) =>
        props.isEmpty ? Palette.Gray05 : Palette.Mandarin};
    color: ${(props) => (props.isEmpty ? Palette.Gray50 : Palette.White)};
    cursor: ${(props) => (props.isEmpty ? `default` : `pointer`)};
`;
