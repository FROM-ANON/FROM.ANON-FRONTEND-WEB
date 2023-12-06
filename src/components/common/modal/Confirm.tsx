import { deleteMailApi, reportMailApi } from "network/apis/mailApis";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

export const Confirm = ({
    text,
    type,
    setIsModalOpenState,
    setIsConfirmedToAction,
    mailId,
}: {
    text: string;
    type: string;
    setIsModalOpenState: React.Dispatch<React.SetStateAction<any>>;
    setIsConfirmedToAction?: React.Dispatch<React.SetStateAction<boolean>>;
    mailId?: number;
}) => {
    const navigate = useNavigate();

    //handleClick
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

    //delete, report, upgrade
    const handleDelete = async () => {
        if (mailId) {
            try {
                // 편지 삭제
                await deleteMailApi(mailId);
                // 성공 시
                if (setIsConfirmedToAction !== undefined)
                    setIsConfirmedToAction(true);
            } catch (err) {
                // 실패 시
                console.error("Delete failed:", err);
            }
        }
    };
    const handleReport = async () => {
        if (mailId) {
            try {
                // 편지 삭제
                await reportMailApi(mailId);
                // 성공 시
                if (setIsConfirmedToAction !== undefined)
                    setIsConfirmedToAction(true);
            } catch (err) {
                // 실패 시
                console.error("Report failed:", err);
            }
        }
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
