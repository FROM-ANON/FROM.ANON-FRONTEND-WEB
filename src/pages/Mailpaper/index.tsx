import { MailpapersList } from "components/Mailpaper/MailpapersList";
import { Column } from "components/common/Div";
import { Header } from "components/common/Header";
import { ToggleMenu } from "components/common/ToggleMenu";
import {
    getAllFavoriteMailPapersApi,
    getAllMailPapersApi,
} from "network/apis/mailPaperApis";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { mailPaperState } from "recoil/atom";

export const Mailpaper = () => {
    const [mailPaper, setMailPaper] = useRecoilState(mailPaperState);
    const [toggleMenu, setToggleMenu] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let resAll = await getAllMailPapersApi();
                let resFavorite = await getAllFavoriteMailPapersApi();
                setMailPaper({
                    ...mailPaper,
                    mailPaperList: resAll?.data,
                    favoriteMailPaperList: resFavorite?.data,
                });
                console.log(mailPaper);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

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
            <MailpapersList
                key={mailPaper.mailPaperList.length}
                toggleMenu={toggleMenu}
            ></MailpapersList>
        </Column>
    );
};
