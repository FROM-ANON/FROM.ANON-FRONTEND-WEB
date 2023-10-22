import { Buttons } from "components/InboxMail/Buttons";
import { Mail } from "components/InboxMail/Mail";
import { Column } from "components/common/Div";
import { Header } from "components/common/Header";
import { Notice } from "components/common/Notice";

export const InboxMail = () => {
    return (
        <Column>
            <Header type="sub" />
            <Notice text="인스타그램 스토리로 여러분의 마음을 표현해보세요." />
            <Column alignItems="center">
                <Mail />
                <Buttons />
            </Column>
        </Column>
    );
};
