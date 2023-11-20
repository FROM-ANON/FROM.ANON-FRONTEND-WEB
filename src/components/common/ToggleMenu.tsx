import styled from "styled-components";
import { Row } from "./Div";
import { Palette } from "styles/Palette";
import Typo from "styles/Typo";
import { useState } from "react";

interface tgmenuProps {
    menu1: string;
    menu2: string;
}

export const ToggleMenu = ({ menu1, menu2 }: tgmenuProps) => {
    const [menuClicked, setMenuClicked] = useState<boolean[]>([true, false]);

    const handleClickMenu1 = () => {
        setMenuClicked([true, false]);
    };
    const handleClickMenu2 = () => {
        setMenuClicked([false, true]);
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
                    &nbsp;10
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
                    &nbsp;5
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
