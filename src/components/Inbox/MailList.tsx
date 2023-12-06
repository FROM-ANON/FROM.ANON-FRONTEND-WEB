import { ToggleMenu } from "components/common/ToggleMenu";
import { Mail } from "./Mail";
import { Column } from "components/common/Div";
import { useEffect, useState } from "react";
import { getAllMailsApi } from "network/apis/mailApis";
import { mailType } from "types";

export const MailList = () => {
    const [mails, setMails] = useState<Array<mailType>>();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                let res = await getAllMailsApi();
                setMails(res);
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        };
        fetchPosts();
    }, []);

    return (
        <Column>
            <ToggleMenu menu1={"전체"} menu2={"미열람"} />
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
