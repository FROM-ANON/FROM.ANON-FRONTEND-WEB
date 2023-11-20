import { Row } from "components/common/Div";
import { Img } from "components/common/Img";
import styled from "styled-components";
import { Palette } from "styles/Palette";
import favoriteNo from "assets/icons/favorite-no.svg";
import favoriteYes from "assets/icons/favorite-yes.svg";
import crown from "assets/icons/crown.svg";
import { useState } from "react";

export const MailpapersList = () => {
    const [mailpaper, setMailpaper] = useState([
        { id: 1, isPro: true, favorite: false },
        { id: 2, isPro: false, favorite: true },
        { id: 3, isPro: false, favorite: false },
        { id: 4, isPro: true, favorite: true },
        { id: 5, isPro: true, favorite: true },
        { id: 6, isPro: false, favorite: false },
        { id: 7, isPro: true, favorite: false },
    ]);
    const mailpaperSet = [];
    for (let i = 0; i < mailpaper.length; i += 2) {
        const set = mailpaper.slice(i, i + 2);
        mailpaperSet.push(set);
    }

    const handleClickFavorite = (id: number) => {
        setMailpaper((prevMailpaper) => {
            return prevMailpaper.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        favorite: !item.favorite,
                    };
                } else {
                    return item;
                }
            });
        });
    };

    return (
        <Container>
            {mailpaperSet.map((set, setIdx) => (
                <RowContainer key={setIdx}>
                    {set.map((item, index) => (
                        <Mailpaper key={index}>
                            {item.isPro ? (
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
                                src={item.favorite ? favoriteYes : favoriteNo}
                                width={13}
                                height={22}
                                alt="favorite icon"
                                onClick={() => handleClickFavorite(item.id)}
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
const Mailpaper = styled(Row)`
    width: 145px;
    height: 145px;
    justify-content: space-between;

    padding: 16px;
    background: ${Palette.Gray10};
    border-radius: 25px;
`;
const RowContainer = styled(Row)`
    max-width: 314px;
    justify-content: flex-start;
    gap: 24px;
`;
