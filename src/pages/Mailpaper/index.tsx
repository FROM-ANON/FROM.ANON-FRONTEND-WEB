import axios, { AxiosError, AxiosResponse } from "axios";
import { MailpapersList } from "components/Mailpaper/MailpapersList";
import { Column } from "components/common/Div";
import { Header } from "components/common/Header";
import { ToggleMenu } from "components/common/ToggleMenu";
import { checkIsLogin, handleError } from "functions";
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
    const [isLogin, setIsLogin] = useState<boolean>();

    useEffect(() => {
        checkIsLogin().then((res) => setIsLogin(res));
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let resAll = await getAllMailPapersApi();
                let isErr = false;
                let resFavorite;

                try {
                    resFavorite = await getAllFavoriteMailPapersApi();
                } catch (err) {
                    const status = handleError(err);
                    if (status === 400) isErr = true;
                }

                if (!isErr) {
                    setMailPaper({
                        ...mailPaper,
                        mailPaperList: resAll?.data,
                        favoriteMailPaperList: resFavorite?.data,
                    });
                } else {
                    setMailPaper({
                        ...mailPaper,
                        mailPaperList: resAll?.data,
                    });
                }
            } catch (err) {
                handleError(err);
            }
        };
        fetchData();
    }, []);

    return (
        <Column>
            <Header type="sub" text="편지지" />
            {isLogin && (
                <ToggleMenu
                    menu1={"전체"}
                    menu2={"즐겨찾기"}
                    menu1Len={mailPaper.mailPaperList.length}
                    menu2Len={mailPaper.favoriteMailPaperList.length}
                    setToggleMenu={setToggleMenu}
                />
            )}
            <MailpapersList
                key={mailPaper.mailPaperList.length}
                toggleMenu={toggleMenu}
            ></MailpapersList>
        </Column>
    );
};
