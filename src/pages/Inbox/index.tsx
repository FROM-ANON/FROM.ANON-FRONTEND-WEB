import { MailList } from "components/Inbox/MailList";
import { Column } from "components/common/Div";
import { Header } from "components/common/Header";
import { useEffect, useState } from "react";
import { Toast } from "components/common/Toast";
import { Confirm } from "components/common/modal/Confirm";
import { useRecoilState } from "recoil";
import { alertOpenState, deleteMailState } from "recoil/atom";
import { checkIsLogin, handleUnauthorizedAccess } from "functions";

export const Inbox = () => {
    useEffect(() => {
        checkIsLogin().then((res) => !res && handleUnauthorizedAccess());
    }, []);

    const [deleteState, setDeleteState] = useRecoilState(deleteMailState);
    const [alertState, setAlertState] = useRecoilState(alertOpenState);

    const [refreshKey, setRefreshKey] = useState(0);
    const [toast, setToast] = useState<boolean>(false);
    const [isConfirmedToDelete, setIsConfirmedToDelete] =
        useState<boolean>(false);
    useEffect(() => {
        if (isConfirmedToDelete) {
            setToast(true);
            setTimeout(() => {
                setToast(false);
            }, 2000);

            setRefreshKey((prevKey) => prevKey + 1);
            setIsConfirmedToDelete(false);
        }
    }, [isConfirmedToDelete]);

    return (
        <Column>
            <Header type="sub" text="받은 편지함" />
            <MailList key={refreshKey} />
            {alertState.isOpen && (
                <Confirm
                    text="편지를 삭제하시겠습니까?"
                    type="delete"
                    setIsModalOpenState={setAlertState}
                    setIsConfirmedToAction={setIsConfirmedToDelete}
                    mailId={deleteState.mailId}
                ></Confirm>
            )}
            <Toast show={toast} text="삭제되었습니다." />
        </Column>
    );
};
