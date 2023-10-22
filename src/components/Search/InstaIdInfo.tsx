import { Column, Row } from "components/common/Div";
import styled from "styled-components";
import { Palette } from "styles/Palette";
import Typo from "styles/Typo";

export const InstaIdInfo = ({
    isClicked,
    onClick,
}: {
    isClicked: boolean;
    onClick: () => void;
}) => {
    return (
        <Container isClicked={isClicked} onClick={onClick}>
            <ProfileImg />
            <Info>
                <Typo.b3>insta_id</Typo.b3>
                <Typo.s2>이름 및 인스타 소개글</Typo.s2>
            </Info>
        </Container>
    );
};

const Container = styled(Row)<{ isClicked: boolean }>`
    width: 300px;
    align-items: center;
    justify-content: center;

    padding: 7px;
    gap: 20px;

    background: ${(props) =>
        props.isClicked ? Palette.Mandarin10 : Palette.White};
`;
const ProfileImg = styled.img`
    width: 49px;
    height: 49px;

    border-radius: 50%;
    background: ${Palette.Gray10};
`;

const Info = styled(Column)`
    width: 200px;
`;
