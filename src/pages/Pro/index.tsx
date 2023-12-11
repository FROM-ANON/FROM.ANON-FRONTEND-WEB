import { Column, Row } from "components/common/Div";
import { Header } from "components/common/Header";
import { Img } from "components/common/Img";
import crown from "assets/icons/crown.svg";
import Typo from "styles/Typo";
import styled from "styled-components";
import { Palette } from "styles/Palette";
import { StyledButton } from "components/common/Button";
import grayCheck from "assets/icons/gray-check.svg";
import { useRecoilState } from "recoil";
import { alertOpenState } from "recoil/atom";
import { Alert } from "components/common/modal/Alert";

export const Pro = () => {
    const [alertState, setAlertState] = useRecoilState(alertOpenState);
    const handleClick = () => {
        setAlertState({ isOpen: true });
    };

    return (
        <Column>
            <Header type="sub" />
            <Column gap={30} alignItems="center">
                <Graybar>
                    <Img
                        src={crown}
                        width={18}
                        height={15.3}
                        alt="crown icon"
                    />
                    <Typo.b1>Pro</Typo.b1>
                </Graybar>
                <Column gap={87.14} alignItems="center">
                    <Container gap={30}>
                        <Column gap={7} alignItems="center">
                            <Img
                                src="/logo.svg"
                                width={88.3}
                                height={97.8}
                                alt="logo"
                            />
                            <Img
                                src="/logotext.svg"
                                width={86}
                                height={20}
                                alt="logo text"
                            />
                        </Column>
                        <Column gap={15}>
                            <Column gap={5}>
                                <Typo.s2 color="#FF4040">
                                    출시 기념 프로모션
                                </Typo.s2>
                                <Row gap={14} alignItems="center">
                                    <Typo.big>월 $1</Typo.big>
                                    <Typo.h3 color={Palette.Gray40}>
                                        <s>$5</s>
                                    </Typo.h3>
                                </Row>
                            </Column>
                            <ExplainBenefit>
                                <Row gap={12}>
                                    <Img
                                        src={grayCheck}
                                        width={24}
                                        height={24}
                                        alt="gray check icon"
                                    />
                                    <Typo.b4 color={Palette.Gray70}>
                                        모든 편지지 제한 없이 사용
                                    </Typo.b4>
                                </Row>
                                <Row gap={12}>
                                    <Img
                                        src={grayCheck}
                                        width={24}
                                        height={24}
                                        alt="gray check icon"
                                    />
                                    <Typo.b4 color={Palette.Gray70}>
                                        편지 내 사진 첨부 기능
                                    </Typo.b4>
                                </Row>
                            </ExplainBenefit>
                        </Column>
                    </Container>
                    <Button color={Palette.Mandarin} onClick={handleClick}>
                        <Typo.b3 color={Palette.White}>
                            프로 버전으로 업그레이드 하기
                        </Typo.b3>
                    </Button>
                </Column>
            </Column>
            {alertState.isOpen && (
                <Alert text="해당 기능은 앱에서만 제공됩니다."></Alert>
            )}
        </Column>
    );
};

const Graybar = styled(Row)`
    height: 47px;
    align-items: center;

    padding-left: 50px;
    gap: 11px;

    background: ${Palette.Gray05};
`;
const Container = styled(Column)`
    width: 300px;
`;
const ExplainBenefit = styled(Column)`
    padding: 27px 31px;
    gap: 17px;

    border-radius: 25px;
    background: ${Palette.Gray05};
`;
const Button = styled(StyledButton)`
    box-shadow: 1px 1px 10px 0px rgba(255, 165, 0, 0.7);
`;
