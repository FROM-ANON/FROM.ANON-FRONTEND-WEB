import { StyledButton } from "components/common/Button";
import { Column } from "components/common/Div";
import { Img } from "components/common/Img";
import { StyledLink } from "components/common/Link";
import { Palette } from "styles/Palette";
import Typo from "styles/Typo";
import styled from "styled-components";

export const Success = () => {
    return (
        <Column justifyContent="center">
            <Wrapper>
                <Img src="/logo.svg" width={88.1} height={97.5} alt="Logo" />
                <Typo.h3>편지가 전송되었습니다.</Typo.h3>
            </Wrapper>
            <Buttons alignItems="center">
                <StyledLink to="/send">
                    <StyledButton color={Palette.Mandarin20}>
                        <Typo.b3>다른 편지 보내기</Typo.b3>
                    </StyledButton>
                </StyledLink>
                <StyledLink to="/main">
                    <StyledButton color={Palette.Mandarin20}>
                        <Typo.b3>홈으로 가기</Typo.b3>
                    </StyledButton>
                </StyledLink>
            </Buttons>
        </Column>
    );
};

const Wrapper = styled(Column)`
    gap: 21px;
    align-items: center;

    position: fixed;
    top: 200px;
`;
const Buttons = styled(Column)`
    gap: 21px;

    position: fixed;
    bottom: 155px;
`;
