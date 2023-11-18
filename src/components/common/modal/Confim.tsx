import { alertOpenState } from "recoil/atom";
import { useSetRecoilState } from "recoil";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

export const Confirm = ({
    text,
    type,
    setIsConfirmedToAction,
}: {
    text: string;
    type: string;
    setIsConfirmedToAction: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const setIsOpen = useSetRecoilState(alertOpenState);

    const nativate = useNavigate();
    const handleClick = () => {
        switch (type) {
            case "delete":
                handleDelete();
                break;
            case "report":
                handleReport();
                break;
            case "proUpgrade":
                handleProUpgrade();
                break;
        }
        setIsOpen({ isOpen: false });
    };
    const handleDelete = () => {
        // 편지 삭제
        //성공시
        setIsConfirmedToAction(true);
    };
    const handleReport = () => {
        //편지 신고
        //성공시
        setIsConfirmedToAction(true);
    };
    const handleProUpgrade = () => {
        nativate("/pro");
    };

    return (
        <Modal.backdrop>
            <Modal.modalcontainer>
                <Modal.message text={text} />
                <Modal.confirmbutton
                    onLeftClick={handleClick}
                    onRightClick={handleClick}
                />
            </Modal.modalcontainer>
        </Modal.backdrop>
    );
};
