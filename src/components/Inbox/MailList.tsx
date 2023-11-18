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
            <ToggleMenu />
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
