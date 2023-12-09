import { ToggleMenu } from "components/common/ToggleMenu";
import { Mail } from "./Mail";
import { Column } from "components/common/Div";
import { useEffect, useState } from "react";
import { getAllMailsApi, getAllNotReadMailsApi } from "network/apis/mailApis";
import { mailType } from "types";

export const MailList = () => {
    const [allMails, setAllMails] = useState<Array<mailType>>();
    const [notReadMails, setNotreadMails] = useState<Array<mailType>>();
    const [toggleMenu, setToggleMenu] = useState<number>(0);
    let mails = toggleMenu === 0 ? allMails : notReadMails;

    useEffect(() => {
        const fetchMails = async () => {
            try {
                let res = await getAllMailsApi();
                setAllMails(res);
            } catch (err) {
                console.log(err);
            }
        };
        const fetchNotReadMails = async () => {
            try {
                let res = await getAllNotReadMailsApi();
                setNotreadMails(res);
            } catch (err) {
                console.log(err);
            }
        };
        fetchMails();
        fetchNotReadMails();
    }, []);

    return (
        <Column>
            <ToggleMenu
                menu1={"전체"}
                menu2={"미열람"}
                menu1Len={allMails?.length}
                menu2Len={notReadMails?.length}
                setToggleMenu={setToggleMenu}
            />
            {mails &&
                mails.map((mailItem) => (
                    <Mail
                        key={mailItem.mailId}
                        mail={mailItem}
                        to={`/inbox/mail/${mailItem.mailId}`}
                    />
                ))}
        </Column>
    );
};
