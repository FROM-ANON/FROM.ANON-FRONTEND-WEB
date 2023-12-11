import styled from "styled-components";
import { Column, Row } from "../Div";
import { Palette } from "styles/Palette";
import Typo from "styles/Typo";

const Modal = () => {
    return <></>;
};
const Message = ({ text }: { text: string }) => {
    return (
        <MessageContainer>
            <Typo.b4 style={{ textAlign: "center" }} color={Palette.Gray80}>
                {text}
            </Typo.b4>
        </MessageContainer>
    );
};
const ConfirmButton = ({
    onLeftClick,
    onRightClick,
}: {
    onLeftClick: () => void;
    onRightClick: () => void;
}) => {
    return (
        <Buttons type="confirm">
            <LeftBtn onClick={onLeftClick}>
                <Typo.b4 color={Palette.Gray60}>취소</Typo.b4>
            </LeftBtn>
            <RightBtn onClick={onRightClick}>
                <Typo.b4 color={Palette.White}>확인</Typo.b4>
            </RightBtn>
        </Buttons>
    );
};

const AlertButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <Buttons onClick={onClick} type="alert">
            <Typo.b4 color={Palette.White}>확인</Typo.b4>
        </Buttons>
    );
};

const Backdrop = styled(Column)`
    width: 100%;
    height: 100%;

    justify-content: center;
    align-items: center;

    background: rgba(0, 0, 0, 0.45);

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
`;
const ModalContainer = styled(Column)`
    width: 297px;
    height: 167px;

    justify-content: space-between;

    padding: 24px 30px;

    border-radius: 15px;
    background: ${Palette.White};
`;
const MessageContainer = styled(Column)`
    width: 100%;
    height: 60px;
    justify-content: center;
    align-items: center;
`;
const Buttons = styled(Row)<{ type: string }>`
    width: 100%;
    height: 43px;

    justify-content: center;
    align-items: center;
    cursor: pointer;

    gap: 17px;
    border-radius: 12px;

    background: ${(props) => props.type === "alert" && Palette.Mandarin};
`;

const LeftBtn = styled(Column)`
    width: 100%;
    height: 100%;

    justify-content: center;
    align-items: center;

    border-radius: 12px;
    background-color: ${Palette.Gray10};
`;
const RightBtn = styled(Column)`
    width: 100%;
    height: 100%;

    justify-content: center;
    align-items: center;

    border-radius: 12px;
    background-color: ${Palette.Mandarin};
`;

Modal.message = Message;
Modal.backdrop = Backdrop;
Modal.modalcontainer = ModalContainer;
Modal.alertbutton = AlertButton;
Modal.confirmbutton = ConfirmButton;

export default Modal;
