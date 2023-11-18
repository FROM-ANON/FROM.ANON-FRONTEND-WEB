import { Column, Row } from "components/common/Div";
import { Img } from "components/common/Img";
import styled from "styled-components";
import { Palette } from "styles/Palette";
import Typo from "styles/Typo";
import readMail from "assets/icons/read-mail.svg";
import unreadMail from "assets/icons/unread-mail.svg";
import trashbin from "assets/icons/trashbin.svg";
import { StyledLink } from "components/common/Link";
import { alertOpenState } from "recoil/atom";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { Alert } from "components/common/modal/Alert";

export const Mail = ({ isRead, to }: { isRead: boolean; to: string }) => {
    const [alertState, setAlertState] = useRecoilState(alertOpenState);
    const handleDelete = () => {
        setAlertState({ ...alertState, isOpen: true });
    };

    return (
        <Container isRead={isRead}>
            <ImgContainer>
                <Img
                    src={isRead ? readMail : unreadMail}
                    width={16}
                    height={16}
                    alt="mail icon"
                />
            </ImgContainer>

            <ColumnContainer
                justifyContent="space-between"
                alignItems="flex-end"
            >
                <StyledLink to={to}>
                    <Column gap={4}>
                        <Row justifyContent="space-between" alignItems="center">
                            <Typo.s4 color={Palette.Gray40}>
                                {isRead ? "읽은 편지" : "안읽은 편지"}
                            </Typo.s4>
                            <Typo.s4 color={Palette.Gray40}>
                                10.21 07:39
                            </Typo.s4>
                        </Row>
                        <Typo.s4 color={Palette.Gray70}>
                            편지글 내용 내용 편지글 내용 편지글 내용 편지글 내용
                            편지글 내용 편지글 내용 편지글 내용 편지
                        </Typo.s4>
                    </Column>
                </StyledLink>
                <div>
                    <Img
                        src={trashbin}
                        width={14}
                        height={15}
                        onClick={handleDelete}
                        alt="trashbin icon"
                    />
                </div>
            </ColumnContainer>
        </Container>
    );
};

const Container = styled(Row)<{ isRead: boolean }>`
    width: 100%;
    min-height: 103px;

    justify-content: flex-start;
    align-items: flex-start;

    gap: 18px;
    padding: 17px;

    background: ${(props) =>
        props.isRead ? Palette.White : Palette.Mandarin20};
`;
const ImgContainer = styled.div`
    margin: 2px 0;
`;
const ColumnContainer = styled(Column)`
    width: calc(100% - 34px);
    word-wrap: break-word;
`;
