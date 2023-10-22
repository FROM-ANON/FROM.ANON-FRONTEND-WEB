import { MailList } from "components/Inbox/MailList";
import { Selected } from "components/Inbox/Selected";
import { Column } from "components/common/Div";
import { Header } from "components/common/Header";
import { Notice } from "components/common/Notice";
import { useRecoilState } from "recoil";
import { clickedMailListState } from "recoil/atom";

export const Inbox = () => {
    const [mailState, setMailState] = useRecoilState(clickedMailListState);
    const mail = mailState.mail;

    const countClickedMails = () => {
        const clickedMails = mail.filter((mailItem) => mailItem.isClicked);
        return clickedMails.length;
    };

    return (
        <Column>
            <Header type="sub" text="받은 편지함" />
            {countClickedMails() ? (
                <Selected />
            ) : (
                <Notice text="함께 감동을 나누고 사랑을 전달하세요." />
            )}
            <MailList />
        </Column>
    );
};
