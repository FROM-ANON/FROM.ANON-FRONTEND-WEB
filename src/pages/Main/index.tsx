import { Column } from "components/common/Div";
import { Header } from "components/common/Header";
import { Menus } from "../../components/Main/Menus";

export const Main = () => {
    return (
        <Column>
            <Header type="main"></Header>
            <Menus />
        </Column>
    );
};
