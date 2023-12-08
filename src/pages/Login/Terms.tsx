import { StyledButton } from "components/common/Button";
import { Column, Row } from "components/common/Div";
import styled from "styled-components";
import { Palette } from "styles/Palette";
import Typo from "styles/Typo";
import termsAllCheckNo from "assets/icons/terms-all-check-no.svg";
import termsAllCheckYes from "assets/icons/terms-all-check-yes.svg";
import { Img } from "components/common/Img";
import termCheckNo from "assets/icons/term-check-no.svg";
import termCheckYes from "assets/icons/term-check-yes.svg";
import termMore from "assets/icons/term-more.svg";
import { StyledLink } from "components/common/Link";
import { useEffect, useState } from "react";

export const Terms = () => {
    const [allChecked, setAllChecked] = useState<boolean>(false);
    const [checkboxStates, setCheckboxStates] = useState([
        {
            state: false,
            termTitle: "[필수] 개인정보 처리방침 동의",
            to: "/login/terms/privacy-policy",
        },
        {
            state: false,
            termTitle: "[필수] 이용약관 동의",
            to: "/login/terms/use-policy",
        },
    ]);
    const handleCheckboxChange = (index: number) => {
        const newCheckboxStates = [...checkboxStates];
        newCheckboxStates[index].state = !newCheckboxStates[index].state;
        setCheckboxStates(newCheckboxStates);
    };
    const toggleCheck = () => {
        if (allChecked) {
            setAllChecked(false);
            const newCheckboxStates = [
                {
                    state: false,
                    termTitle: checkboxStates[0].termTitle,
                    to: checkboxStates[0].to,
                },
                {
                    state: false,
                    termTitle: checkboxStates[1].termTitle,
                    to: checkboxStates[1].to,
                },
            ];
            setCheckboxStates(newCheckboxStates);
        } else {
            setAllChecked(true);
            const newCheckboxStates = [
                {
                    state: true,
                    termTitle: checkboxStates[0].termTitle,
                    to: checkboxStates[0].to,
                },
                {
                    state: true,
                    termTitle: checkboxStates[1].termTitle,
                    to: checkboxStates[1].to,
                },
            ];
            setCheckboxStates(newCheckboxStates);
        }
    };
    useEffect(() => {
        const checkIfAnyFalse = () => {
            for (const checkbox of checkboxStates) {
                if (!checkbox.state) {
                    return false;
                }
            }
            return true;
        };

        if (checkIfAnyFalse()) {
            setAllChecked(true); //약관이 모두 체크되었을 경우 전체 체크 버튼 체크
        } else {
            setAllChecked(false); //체크되지 않은 약관이 있을 경우 전체 체크 버튼 해제
        }
    }, [checkboxStates]);

    return (
        <Container>
            <Column>
                <Typo.h3>
                    약관에 동의하면 <br /> 회원가입이 완료됩니다.
                </Typo.h3>
            </Column>
            <TermContainer>
                <Row alignItems="center" gap={8}>
                    <Img
                        src={allChecked ? termsAllCheckYes : termsAllCheckNo}
                        width={24.14}
                        height={24.14}
                        onClick={toggleCheck}
                        alt="all agree button"
                    />
                    <Typo.b4 color={Palette.Gray60}>
                        [필수] FROM.ANON 약관 전체 동의
                    </Typo.b4>
                </Row>
                <Line />
                <Row alignItems="center" justifyContent="space-between">
                    <Row alignItems="center" gap={8}>
                        <Img
                            src={
                                checkboxStates[0].state
                                    ? termCheckYes
                                    : termCheckNo
                            }
                            width={10.83}
                            height={7.35}
                            onClick={() => handleCheckboxChange(0)}
                            alt="agree use terms button"
                        />
                        <Typo.b4 color={Palette.Gray60}>
                            {checkboxStates[0].termTitle}
                        </Typo.b4>
                    </Row>
                    <StyledLink to={checkboxStates[0].to}>
                        <Img
                            src={termMore}
                            width={5.92}
                            height={11.37}
                            alt="more button"
                        />
                    </StyledLink>
                </Row>
                <Row alignItems="center" justifyContent="space-between">
                    <Row alignItems="center" gap={8}>
                        <Img
                            src={
                                checkboxStates[1].state
                                    ? termCheckYes
                                    : termCheckNo
                            }
                            width={10.83}
                            height={7.35}
                            onClick={() => handleCheckboxChange(1)}
                            alt="agree privacy terms button"
                        />
                        <Typo.b4 color={Palette.Gray60}>
                            {checkboxStates[1].termTitle}
                        </Typo.b4>
                    </Row>
                    <StyledLink to={checkboxStates[1].to}>
                        <Img
                            src={termMore}
                            width={5.92}
                            height={11.37}
                            alt="more button"
                        />
                    </StyledLink>
                </Row>
            </TermContainer>
            <BtnContainer>
                <StyledLink to={allChecked ? "/" : ""}>
                    <StyledButton
                        color={allChecked ? Palette.Mandarin : Palette.Gray05}
                    >
                        <Typo.b3
                            color={allChecked ? Palette.White : Palette.Gray50}
                        >
                            확인
                        </Typo.b3>
                    </StyledButton>
                </StyledLink>
            </BtnContainer>
        </Container>
    );
};

const Container = styled(Column)`
    max-width: 406px;
    align-items: center;
    justify-content: center;

    gap: 40px;
    padding: 53px;
    padding-top: 170px;
`;
const TermContainer = styled(Column)`
    width: 300px;
    padding: 20px;
    gap: 15px;

    border-radius: 25px;
    border: 1px solid ${Palette.Mandarin};
`;
const Line = styled.div`
    width: 100%;
    height: 1px;
    background: ${Palette.Mandarin};
`;
const BtnContainer = styled(Column)`
    align-items: center;

    position: fixed;
    bottom: 162px;
`;
