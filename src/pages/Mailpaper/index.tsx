import { MailpapersList } from "components/Mailpaper/MailpapersList";
import { Column } from "components/common/Div";
import { Header } from "components/common/Header";
import { ToggleMenu } from "components/common/ToggleMenu";

export const Mailpaper = () => {
    return (
        <Column>
            <Header type="sub" text="편지지" />
            {/* <ToggleMenu menu1={"전체"} menu2={"즐겨찾기"} /> */}
            <MailpapersList></MailpapersList>
        </Column>
    );
};
