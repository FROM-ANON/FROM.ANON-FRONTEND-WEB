import { Row } from "components/common/Div";
import styled from "styled-components";
import rightArrow from "assets/icons/right-arrow.svg";
import { Palette } from "styles/Palette";
import { StyledLink } from "components/common/Link";

export const Menu = ({
    children,
    to,
}: {
    children: React.ReactNode;
    to: string;
}) => {
    return (
        <StyledLink to={to}>
            <Container>
                {children}
                <Img src={rightArrow} alt="right arrow" />
            </Container>
        </StyledLink>
    );
};

const Container = styled(Row)`
    height: 129px;
    justify-content: space-between;
    align-items: center;

    background: ${Palette.Mandarin05};
    padding: 0 34px;
`;
const Img = styled.img`
    width: 10px;
    height: 24px;
`;
