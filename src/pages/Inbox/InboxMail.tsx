import { AxiosResponse } from "axios";
import { Buttons } from "components/InboxMail/Buttons";
import { Mail } from "components/InboxMail/Mail";
import { PageContainer, Column } from "components/common/Div";
import { Header } from "components/common/Header";
import { checkIsLogin, handleError, handleUnauthorizedAccess } from "functions";
import { getMailApi } from "network/apis/mailApis";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { mailType } from "types";

export const InboxMail = () => {
    useEffect(() => {
        checkIsLogin().then((res) => !res && handleUnauthorizedAccess());
    }, []);

    const { id } = useParams();
    const idInt = id ? parseInt(id) : null;
    const [mail, setMail] = useState<mailType | undefined>();

    useEffect(() => {
        const getMail = async () => {
            if (idInt !== null) {
                try {
                    let res: AxiosResponse<any> = await getMailApi(idInt);
                    setMail(res?.data);
                } catch (err) {
                    handleError(err);
                }
            }
        };

        getMail();
    }, [idInt]);

    return (
        <>
            {mail && (
                <Container mailPaperId={mail.mailPaperId} gap={46}>
                    <Header type="sub" bgcolor="rgba(255, 255, 255, 0.30)" />
                    <Column alignItems="center" gap={105}>
                        <Mail mail={mail} />
                        <Buttons mail={mail} />
                    </Column>
                </Container>
            )}
        </>
    );
};

const Container = styled(PageContainer)<{ mailPaperId: number }>`
    background-image: ${(props) =>
        `url("/mailPaper/${props.mailPaperId}.svg")`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;
