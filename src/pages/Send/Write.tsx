import { Buttons } from "components/Write/Buttons";
import { SendButton } from "components/Write/SendButton";
import { TextInputBox } from "components/Write/TextInputBox";
import { Column, PageContainer, Row } from "components/common/Div";
import { Header } from "components/common/Header";
import styled from "styled-components";
import Typo from "styles/Typo";
import { WriteMailState } from "recoil/atom";
import { useRecoilState } from "recoil";
import { Palette } from "styles/Palette";

export const Write = () => {
    const [writeState, setWriteState] = useRecoilState(WriteMailState);

    return (
        <Column alignItems="center">
            <Header type="sub" bgcolor="rgba(255, 255, 255, 0.30)" />
            <Container gap={20}>
                <Typo.h3>@Insta_id에게</Typo.h3>
                <Buttons></Buttons>
                <Column gap={20}>
                    <TextInputBox></TextInputBox>
                    <Row justifyContent="flex-end">
                        <Typo.b4 color={Palette.Mandarin}>
                            {writeState.text.length} / 500자
                        </Typo.b4>
                    </Row>
                </Column>
            </Container>
            <SendButton />
        </Column>
    );
};

const Container = styled(Column)`
    width: 300px;
`;
