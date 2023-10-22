import styled from "styled-components";
import { Column, Row } from "./Div";
import { Palette } from "styles/Palette";
import Typo from "styles/Typo";
import { alertOpenState } from "recoil/atom";
import { useSetRecoilState } from "recoil";

export const Alert = ({ text, type }: { text: string; type: string }) => {
    const setIsOpen = useSetRecoilState(alertOpenState);

    return (
        <Container>
            <Modal>
                <Message>
                    <Typo.s2 color={Palette.Black}>{text}</Typo.s2>
                </Message>
                {type === "confirm" ? (
                    <Buttons>
                        <LeftBtn
                            onClick={() => {
                                setIsOpen({ isOpen: false });
                            }}
                        >
                            <Typo.s1 color={Palette.Gray50}>취소</Typo.s1>
                        </LeftBtn>
                        <RightBtn
                            onClick={() => {
                                setIsOpen({ isOpen: false });
                            }}
                        >
                            <Typo.s1 color={Palette.Mandarin}>확인</Typo.s1>
                        </RightBtn>
                    </Buttons>
                ) : (
                    <Buttons
                        onClick={() => {
                            setIsOpen({ isOpen: false });
                        }}
                    >
                        <Typo.b1 color={Palette.Mandarin}>확인</Typo.b1>
                    </Buttons>
                )}
            </Modal>
        </Container>
    );
};

const Container = styled(Column)`
    width: 100%;
    height: 100%;

    justify-content: center;
    align-items: center;

    background: rgba(0, 0, 0, 0.25);

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
`;
const Modal = styled(Column)`
    width: 297px;
    height: 136px;

    border-radius: 8px;
    background: ${Palette.White};
`;
const Message = styled(Column)`
    width: 100%;
    height: 100%;

    justify-content: center;
    align-items: center;

    border-bottom: 1px solid ${Palette.Gray50};
`;
const Buttons = styled(Row)`
    width: 100%;
    height: 70px;

    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const LeftBtn = styled(Column)`
    width: 100%;
    height: 100%;

    justify-content: center;
    align-items: center;

    border-right: 1px solid ${Palette.Gray50};
`;
const RightBtn = styled(Column)`
    width: 100%;
    height: 100%;

    justify-content: center;
    align-items: center;
`;
