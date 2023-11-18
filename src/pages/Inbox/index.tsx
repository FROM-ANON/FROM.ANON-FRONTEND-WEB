import { MailList } from "components/Inbox/MailList";
import { PageContainer } from "components/common/Div";
import { Header } from "components/common/Header";
import { Alert } from "components/common/modal/Alert";
import { alertOpenState } from "recoil/atom";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { Toast } from "components/common/Toast";
import { Confirm } from "components/common/modal/Confim";

export const Inbox = () => {
    const [alertState, setAlertState] = useRecoilState(alertOpenState);
    const [toast, setToast] = useState<boolean>(false);
    const [isConfirmedToDelete, setIsConfirmedToDelete] =
        useState<boolean>(false);
    useEffect(() => {
        if (isConfirmedToDelete) {
            setToast(true);
            setTimeout(() => {
                setToast(false);
            }, 2000);

            setIsConfirmedToDelete(false);
        }
    }, [isConfirmedToDelete]);

    return (
        <PageContainer>
            <Header type="sub" text="받은 편지함" />
            <MailList />
            {alertState.isOpen && (
                <Confirm
                    text="편지를 삭제하시겠습니까?"
                    type="delete"
                    setIsConfirmedToAction={setIsConfirmedToDelete}
                ></Confirm>
            )}
            <Toast show={toast} text="삭제되었습니다." />
        </PageContainer>
    );
};
