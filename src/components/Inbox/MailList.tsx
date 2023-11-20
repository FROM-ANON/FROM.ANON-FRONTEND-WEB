import { ToggleMenu } from "components/common/ToggleMenu";
import { Mail } from "./Mail";
import { Column } from "components/common/Div";

export const MailList = () => {
    const mail = [
        { isRead: false },
        { isRead: false },
        { isRead: true },
        { isRead: true },
        { isRead: false },
    ];

    return (
        <Column>
            <ToggleMenu menu1={"전체"} menu2={"미열람"} />
            {mail.map((mailItem, index) => (
                <Mail
                    key={index}
                    isRead={mailItem.isRead}
                    to={`/inbox/mail/${index}`}
                />
            ))}
        </Column>
    );
};
