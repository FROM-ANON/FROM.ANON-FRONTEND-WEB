import { StyledButton } from "components/common/Button";
import { Column } from "components/common/Div";
import { Img } from "components/common/Img";
import { StyledLink } from "components/common/Link";
import { Palette } from "styles/Palette";
import Typo from "styles/Typo";
import styled from "styled-components";

export const Login = () => {
    const getAuthCodeUrl = `https://api.instagram.com/oauth/authorize?client_id=${process.env.REACT_APP_INSTA_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_INSTA_REDIRECT_URI}&scope=user_profile,user_media&response_type=code`;

    return (
        <Column>
            <Wrapper>
                <Img
                    src="/logo.svg"
                    width={132.59}
                    height={146.86}
                    alt="Logo"
                />
                <Img
                    src="logotext.svg"
                    width={169}
                    height={38}
                    alt="LogoText"
                />
            </Wrapper>
            <Buttons alignItems="center">
                <StyledLink to={getAuthCodeUrl}>
                    <StyledButton color="var(--linear_gradient, linear-gradient(90deg, rgba(255, 214, 0, 0.90) 0%, rgba(255, 122, 0, 0.90) 24.48%, rgba(255, 0, 105, 0.90) 39.58%, rgba(211, 0, 197, 0.90) 60.42%, rgba(118, 56, 250, 0.90) 79.69%))">
                        <Typo.b3 color={Palette.White}>
                            인스타그램 아이디로 로그인
                        </Typo.b3>
                    </StyledButton>
                </StyledLink>
                <StyledLink to="/send">
                    <u>
                        <Typo.b4>로그인 하지 않고 시작</Typo.b4>
                    </u>
                </StyledLink>
            </Buttons>
        </Column>
    );
};

const Wrapper = styled(Column)`
    gap: 17px;
    align-items: center;

    position: fixed;
    top: 173px;
`;
const Buttons = styled(Column)`
    gap: 31px;

    position: fixed;
    bottom: 100px;
`;
