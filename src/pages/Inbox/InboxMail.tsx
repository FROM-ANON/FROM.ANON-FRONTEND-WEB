import { Buttons } from "components/InboxMail/Buttons";
import { Mail } from "components/InboxMail/Mail";
import { PageContainer, Column } from "components/common/Div";
import { Header } from "components/common/Header";
import { getMailApi } from "network/apis/mailApis";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Palette } from "styles/Palette";
import { mailType } from "types";

export const InboxMail = () => {
    const { id } = useParams();
    const idInt = id ? parseInt(id) : null;
    const [mail, setMail] = useState<mailType | undefined>();

    useEffect(() => {
        const getMail = async () => {
            if (idInt !== null) {
                try {
                    let res = await getMailApi(idInt);
                    console.log(res);
                    setMail(res);
                } catch (err) {
                    console.log(err);
                }
            }
        };

        getMail();
    }, []);

    return (
        <PageContainer backgroundColor={Palette.Mandarin20}>
            <Header type="sub" bgcolor="rgba(255, 255, 255, 0.30)" />
            <Column alignItems="center">
                <Mail mail={mail} />
                <Buttons />
            </Column>
        </PageContainer>
    );
};
