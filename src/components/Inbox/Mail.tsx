import { Column, Row } from "components/common/Div";
import styled from "styled-components";
import { Palette } from "styles/Palette";
import Typo from "styles/Typo";

export const Mail = ({
    isClicked,
    onClick,
}: {
    isClicked: boolean;
    onClick: () => void;
}) => {
    return (
        <Container onClick={onClick}>
            <Checkbox isClicked={isClicked} />
            <Column>
                <Typo.s4 color={Palette.Black}>
                    편지글 내용 편지글 내용 편지글 내용 편지글 내용 편지글 내용
                    편지글 내용 편지글 내용 편지글 내용 편지
                </Typo.s4>
                <Row justifyContent="flex-end">
                    <Typo.s4 color={Palette.Mandarin}>10.21 07:39</Typo.s4>
                </Row>
            </Column>
        </Container>
    );
};

const Container = styled(Row)`
    justify-content: center;
    align-items: flex-start;

    gap: 19px;
    padding: 8px 16px;

    border-top: 1px solid ${Palette.Mandarin50};
    background: ${Palette.White};
`;
const Checkbox = styled.div<{ isClicked: boolean }>`
    width: 13px;
    height: 13px;

    border: 1px solid ${Palette.Mandarin20};
    background: ${(props) =>
        props.isClicked ? Palette.Mandarin : Palette.White};
`;
