import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

export const Confirm = ({
    text,
    type,
    setIsModalOpenState,
    setIsConfirmedToAction,
}: {
    text: string;
    type: string;
    setIsModalOpenState: React.Dispatch<React.SetStateAction<any>>;
    setIsConfirmedToAction?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const navigate = useNavigate();
    const handleLeftClick = () => {
        setIsModalOpenState(false);
    };
    const handleRightClick = () => {
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
        setIsModalOpenState(false);
    };
    const handleDelete = () => {
        // 편지 삭제
        //성공시
        if (setIsConfirmedToAction !== undefined) setIsConfirmedToAction(true);
    };
    const handleReport = () => {
        //편지 신고
        //성공시
        if (setIsConfirmedToAction !== undefined) setIsConfirmedToAction(true);
    };
    const handleProUpgrade = () => {
        navigate("/pro");
    };

    return (
        <Modal.backdrop>
            <Modal.modalcontainer>
                <Modal.message text={text} />
                <Modal.confirmbutton
                    onLeftClick={handleLeftClick}
                    onRightClick={handleRightClick}
                />
            </Modal.modalcontainer>
        </Modal.backdrop>
    );
};
