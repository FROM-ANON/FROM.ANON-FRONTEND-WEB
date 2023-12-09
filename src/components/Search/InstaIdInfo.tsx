import { Column, Row } from "components/common/Div";
import styled from "styled-components";
import { Palette } from "styles/Palette";
import Typo from "styles/Typo";
import { userType } from "types";

export const InstaIdInfo = ({
    user,
    isClicked,
    onClick,
}: {
    user: userType;
    isClicked: boolean;
    onClick: () => void;
}) => {
    return (
        <Container isClicked={isClicked} onClick={onClick}>
            <ProfileImg isClicked={isClicked} />
            <Info>
                <Typo.b3>{user.instaId}</Typo.b3>
            </Info>
        </Container>
    );
};

const Container = styled(Row)<{ isClicked: boolean }>`
    align-items: center;
    justify-content: center;

    padding: 7px;
    gap: 20px;

    background: ${(props) =>
        props.isClicked ? Palette.Mandarin20 : Palette.White};
`;
const ProfileImg = styled.div<{ isClicked: boolean }>`
    width: 49px;
    height: 49px;

    border-radius: 50%;
    background: ${(props) =>
        props.isClicked ? Palette.Mandarin : Palette.Gray05};
`;

const Info = styled(Column)`
    width: 217px;
`;
