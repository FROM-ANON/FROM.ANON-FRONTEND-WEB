import { Column } from "components/common/Div";
import { Menu } from "./Menu";
import Typo from "styles/Typo";
import { Link } from "./Link";

export const Menus = () => {
    return (
        <Column>
            <Menu to="/inbox">
                <Typo.h3>받은 편지함</Typo.h3>
            </Menu>
            <Menu to="/">
                <Column gap={7}>
                    <Typo.h3>편지함 링크 공유하기</Typo.h3>
                    <Link />
                </Column>
            </Menu>
            <Menu to="/send">
                <Typo.h3>편지 보내기</Typo.h3>
            </Menu>
            <Menu to="/mailpaper">
                <Typo.h3>편지지</Typo.h3>
            </Menu>
        </Column>
    );
};
