import { alertOpenState } from "recoil/atom";
import { useSetRecoilState } from "recoil";
import Modal from "./Modal";

export const Alert = ({
    text,
    type,
    setIsConfirmedToAction,
}: {
    text: string;
    type: string;
    setIsConfirmedToAction: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const setIsOpen = useSetRecoilState(alertOpenState);
    const handleClick = () => {
        setIsOpen({ isOpen: false });
    };

    return (
        <Modal.backdrop>
            <Modal.modalcontainer>
                <Modal.message text={text} />
                <Modal.alertbutton onClick={handleClick} />
            </Modal.modalcontainer>
        </Modal.backdrop>
    );
};
