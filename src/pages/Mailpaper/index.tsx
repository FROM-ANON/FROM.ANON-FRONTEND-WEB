import { MailpapersList } from "components/Mailpaper/MailpapersList";
import { Column } from "components/common/Div";
import { Header } from "components/common/Header";
import { ToggleMenu } from "components/common/ToggleMenu";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { mailPaperState } from "recoil/atom";

export const Mailpaper = () => {
    const [mailPaper, setMailPaper] = useRecoilState(mailPaperState);
    const [toggleMenu, setToggleMenu] = useState<number>(0);
    let mailPapers =
        toggleMenu === 0
            ? mailPaper.mailPaperList
            : mailPaper.favoriteMailPaperList;

    return (
        <Column>
            <Header type="sub" text="편지지" />
            <ToggleMenu
                menu1={"전체"}
                menu2={"즐겨찾기"}
                menu1Len={mailPaper.mailPaperList.length}
                menu2Len={mailPaper.favoriteMailPaperList.length}
                setToggleMenu={setToggleMenu}
            />
            <MailpapersList toggleMenu={toggleMenu}></MailpapersList>
        </Column>
    );
};
