import { Row } from "components/common/Div";
import { Img } from "components/common/Img";
import styled from "styled-components";
import { Palette } from "styles/Palette";
import favoriteNo from "assets/icons/favorite-no.svg";
import favoriteYes from "assets/icons/favorite-yes.svg";
import crown from "assets/icons/crown.svg";
import { useEffect, useState } from "react";
import {
    delFavoriteMailPaperApi,
    getAllFavoriteMailPapersApi,
    getAllMailPapersApi,
    postFavoriteMailPaperApi,
} from "network/apis/mailPaperApis";
import { useRecoilState } from "recoil";
import { WriteMailState, mailPaperState } from "recoil/atom";
import { mailpaperType } from "types";
import { useNavigate } from "react-router-dom";

export const MailpapersList = ({ toggleMenu }: { toggleMenu: number }) => {
    const [mailPaper, setMailPaper] = useRecoilState(mailPaperState);
    const [toggledMPList, setToggledMPList] = useState<Array<mailpaperType>>(
        []
    );
    const fetchAllFavoriteMailPapers = async () => {
        let res = await getAllFavoriteMailPapersApi();
        setMailPaper({ ...mailPaper, favoriteMailPaperList: res?.data });
    };

    const mailpaperSet = [];
    for (let i = 0; i < toggledMPList?.length; i += 2) {
        const set = toggledMPList.slice(i, i + 2);
        mailpaperSet.push(set);
    }

    const handleClickFavorite = async (mailPaperId: number) => {
        const favoriteMailPaperId = mailPaper.favoriteMailPaperList.find(
            (fmp) => fmp.mailPaperId === mailPaperId
        )?.id;

        if (favoriteMailPaperId) {
            await delFavoriteMailPaperApi(favoriteMailPaperId);
        } else {
            await postFavoriteMailPaperApi(mailPaperId);
        }
        fetchAllFavoriteMailPapers();
    };
    const checkIsFavorite = (mailPaperId: number): boolean => {
        return mailPaper.favoriteMailPaperList.some(
            (fmp) => fmp.mailPaperId === mailPaperId
        );
    };

    useEffect(() => {
        if (toggleMenu === 0) {
            setToggledMPList(mailPaper.mailPaperList);
        } else {
            setToggledMPList(
                mailPaper.mailPaperList.filter((it) => checkIsFavorite(it.id))
            );
        }
    }, [toggleMenu]);

    const navigate = useNavigate();
    const [writeState, setWriteState] = useRecoilState(WriteMailState);
    const setItSelectedMailPaper = (mailPaperId: number) => {
        setWriteState({ ...writeState, mailPaperId: mailPaperId });
        navigate(-1);
    };

    return (
        <Container>
            {mailpaperSet.map((set, setIdx) => (
                <RowContainer key={setIdx}>
                    {set.map((item, index) => (
                        <Mailpaper
                            key={index}
                            mailPaperId={item.id}
                            onClick={() => setItSelectedMailPaper(item.id)}
                        >
                            {item.pro ? (
                                <Img
                                    src={crown}
                                    width={11}
                                    height={10}
                                    alt="pro crown icon"
                                />
                            ) : (
                                <div></div>
                            )}
                            <Img
                                src={
                                    checkIsFavorite(item.id)
                                        ? favoriteYes
                                        : favoriteNo
                                }
                                width={13}
                                height={22}
                                alt="favorite icon"
                                onClick={(e) => {
                                    e.stopPropagation(); // 이벤트 전파 중단
                                    handleClickFavorite(item.id);
                                }}
                            />
                        </Mailpaper>
                    ))}
                </RowContainer>
            ))}
        </Container>
    );
};

const Container = styled(Row)`
    flex-wrap: wrap;
    justify-content: center;

    gap: 24px;
    padding: 17px 0;
`;
const Mailpaper = styled(Row)<{ mailPaperId: number }>`
    width: 145px;
    height: 145px;
    justify-content: space-between;

    padding: 16px;
    background: ${Palette.Gray10};
    border-radius: 25px;

    background-image: ${(props) =>
        `url("/mailPaper/${props.mailPaperId}.svg")`};
    background-size: cover;
    background-repeat: no-repeat;
`;
const RowContainer = styled(Row)`
    max-width: 314px;
    justify-content: flex-start;
    gap: 24px;
`;
