import { Buttons } from "components/Write/Buttons";
import { SendButton } from "components/Write/SendButton";
import { TextInputBox } from "components/Write/TextInputBox";
import { Column, PageContainer, Row } from "components/common/Div";
import { Header } from "components/common/Header";
import styled from "styled-components";
import Typo from "styles/Typo";
import { WriteMailState, selectedMailPaperState } from "recoil/atom";
import { useRecoilState } from "recoil";
import { Palette } from "styles/Palette";
import { useParams } from "react-router-dom";
import { getUserApi } from "network/apis/userApis";
import { useEffect, useState } from "react";
import { userType } from "types";

export const Write = () => {
    const [writeState, setWriteState] = useRecoilState(WriteMailState);
    const { id } = useParams();
    const idInt = id ? parseInt(id) : null;
    const [userSendTo, setUserSendTo] = useState<userType>();
    const [selectedMailPaper, setSelectedMailPaper] = useRecoilState(
        selectedMailPaperState
    );
    useEffect(() => {
        const getUser = async () => {
            if (idInt !== null) {
                try {
                    let res = await getUserApi(idInt);
                    setUserSendTo(res);
                    setWriteState({ ...writeState, userId: idInt });
                } catch (err) {
                    console.log(err);
                }
            }
        };

        getUser();
    }, [idInt]);

    return (
        <Wrapper
            alignItems="center"
            mailPaperId={selectedMailPaper.selectedMailPaperId}
        >
            <Header type="sub" bgcolor="rgba(255, 255, 255, 0.30)" />
            <Container gap={20}>
                <Typo.h3>@{userSendTo?.instaId}에게</Typo.h3>
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
        </Wrapper>
    );
};

const Wrapper = styled(PageContainer)<{ mailPaperId: number }>`
    background-image: ${(props) =>
        `url("/mailPaper/${props.mailPaperId}.svg")`};
    background-size: cover;
    background-repeat: no-repeat;
`;

const Container = styled(Column)`
    width: 300px;
`;
