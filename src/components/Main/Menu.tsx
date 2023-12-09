import { Column, Row } from "components/common/Div";
import styled from "styled-components";
import rightArrow from "assets/icons/right-arrow.svg";
import { Palette } from "styles/Palette";
import { StyledLink } from "components/common/Link";
import { Img } from "components/common/Img";
import Typo from "styles/Typo";
import { Link } from "./Link";

export const Menu = ({
    children,
    to,
    underComponent,
}: {
    children: string;
    to: string;
    underComponent?: boolean;
}) => {
    return (
        <Container underComponent={underComponent}>
            <Row justifyContent="space-between" alignItems="center">
                <Typo.h3>{children}</Typo.h3>
                <StyledLink to={to}>
                    <Img
                        src={rightArrow}
                        width={11}
                        height={19}
                        alt="right arrow"
                    />
                </StyledLink>
            </Row>
            {/* "편지함 링크 공유하기" 메뉴의 경우 Link component 추가 */}
            {underComponent && <Link />}
        </Container>
    );
};

const Container = styled(Column)<{ underComponent: boolean | undefined }>`
    width: 100%;
    height: ${(props) => (props.underComponent ? "120px" : "90px")};

    justify-content: center;
    align-items: center;

    padding: 0 32px;
    gap: 20px;

    border-radius: 30px;
    background: ${Palette.White};
`;
