import { Buttons } from "components/InboxMail/Buttons";
import { Mail } from "components/InboxMail/Mail";
import { PageContainer, Column } from "components/common/Div";
import { Header } from "components/common/Header";
import { Palette } from "styles/Palette";

export const InboxMail = () => {
    return (
        <PageContainer backgroundColor={Palette.Mandarin20}>
            <Header type="sub" bgcolor="rgba(255, 255, 255, 0.30)" />
            <Column alignItems="center">
                <Mail />
                <Buttons />
            </Column>
        </PageContainer>
    );
};
