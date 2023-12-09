import styled from "styled-components";
import { Row } from "./Div";
import { Palette } from "styles/Palette";
import Typo from "styles/Typo";
import React, { useState } from "react";

interface tgmenuProps {
    menu1: string;
    menu2: string;
    menu1Len: number | undefined;
    menu2Len: number | undefined;
    setToggleMenu: React.Dispatch<React.SetStateAction<number>>;
}

export const ToggleMenu = ({
    menu1,
    menu2,
    menu1Len,
    menu2Len,
    setToggleMenu,
}: tgmenuProps) => {
    const [menuClicked, setMenuClicked] = useState<boolean[]>([true, false]);

    const handleClickMenu1 = () => {
        setMenuClicked([true, false]);
        setToggleMenu(0);
    };
    const handleClickMenu2 = () => {
        setMenuClicked([false, true]);
        setToggleMenu(1);
    };

    return (
        <Container>
            <TextRow onClick={handleClickMenu1}>
                <Typo.s2
                    color={menuClicked[0] ? Palette.Black : Palette.Gray40}
                >
                    {menu1}
                </Typo.s2>
                <Typo.s2
                    color={menuClicked[0] ? Palette.Mandarin : Palette.Gray40}
                >
                    &nbsp;{menu1Len === undefined ? 0 : menu1Len}
                </Typo.s2>
            </TextRow>
            <TextRow onClick={handleClickMenu2}>
                <Typo.s2
                    color={menuClicked[1] ? Palette.Black : Palette.Gray40}
                >
                    {menu2}
                </Typo.s2>
                <Typo.s2
                    color={menuClicked[1] ? Palette.Mandarin : Palette.Gray40}
                >
                    &nbsp;{menu2Len === undefined ? 0 : menu2Len}
                </Typo.s2>
            </TextRow>
        </Container>
    );
};

const Container = styled(Row)`
    justify-content: flex-start;
    align-items: center;

    background: ${Palette.White};
    padding: 11px 42px;
    gap: 15px;
`;
const TextRow = styled.div`
    display: flex;
`;
