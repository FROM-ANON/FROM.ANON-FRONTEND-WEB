import { StyledButton } from "components/common/Button";
import { Column, Row } from "components/common/Div";
import { Img } from "components/common/Img";
import { StyledLink } from "components/common/Link";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Palette } from "styles/Palette";
import Typo from "styles/Typo";

export const OnBoarding = () => {
    const [idx, setIdx] = useState<number>(0);
    const [indicatorState, setIndicatorState] = useState([
        {
            isFocused: true,
            content: (
                <>
                    <Typo.h2>익명으로</Typo.h2>
                    <Typo.h2 color={Palette.Mandarin}>마음을 전달하는</Typo.h2>
                    <Typo.h2>메세지</Typo.h2>
                </>
            ),
        },
        {
            isFocused: false,
            content: (
                <>
                    <Typo.h2 color={Palette.Mandarin}>
                        나만의 SNS 링크를
                    </Typo.h2>
                    <Typo.h2 color={Palette.Mandarin}>공유하고</Typo.h2>
                    <Typo.h2>메세지를 받아보세요</Typo.h2>
                </>
            ),
        },
        {
            isFocused: false,
            content: (
                <>
                    <Typo.h2>전달받은 마음을</Typo.h2>
                    <Typo.h2 color={Palette.Mandarin}>
                        나의 스토리를 통해
                    </Typo.h2>
                    <Typo.h2 color={Palette.Mandarin}>표현해보세요</Typo.h2>
                </>
            ),
        },
    ]);
    const navigate = useNavigate();
    const handleClickBtn = () => {
        if (idx <= 1) {
            setIdx(idx + 1);
        } else {
            navigate("/login");
        }
    };
    useEffect(() => {
        setIndicatorState((prevState) =>
            prevState.map((state, index) =>
                index === idx
                    ? { ...state, isFocused: true }
                    : { ...state, isFocused: false }
            )
        );
    }, [idx]);

    return (
        <Container gap={65}>
            <Column gap={12} alignItems="center">
                <Img
                    src="/logo.svg"
                    width={104.2}
                    height={115.42}
                    alt="logo img"
                />
                <Img
                    src="/logotext.svg"
                    width={102}
                    height={23}
                    alt="logo text"
                />
            </Column>
            <Column alignItems="center">{indicatorState[idx].content}</Column>
            <Row gap={11} justifyContent="center">
                <Circle isFocused={indicatorState[0].isFocused} />
                <Circle isFocused={indicatorState[1].isFocused} />
                <Circle isFocused={indicatorState[2].isFocused} />
            </Row>
            <Column gap={17} alignItems="center">
                <StyledButton color={Palette.Mandarin} onClick={handleClickBtn}>
                    <Typo.b3 color={Palette.White}>
                        {idx === 2 ? "시작하기" : "다음"}
                    </Typo.b3>
                </StyledButton>
                <StyledLink to="/login">
                    <Row>
                        <Typo.s2>이미 계정이 있으신가요? </Typo.s2>
                        <Typo.s2 color={Palette.Mandarin}>
                            &nbsp; 바로 로그인하세요
                        </Typo.s2>
                    </Row>
                </StyledLink>
            </Column>
        </Container>
    );
};

const Container = styled(Column)`
    justify-content: center;
    align-items: center;
    padding: 140px 0;
`;
const Circle = styled.div<{ isFocused: boolean }>`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${(props) =>
        props.isFocused ? Palette.Black : Palette.Gray20};
`;
