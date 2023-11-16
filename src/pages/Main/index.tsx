import { PageContainer } from "components/common/Div";
import { Header } from "components/common/Header";
import { Menus } from "../../components/Main/Menus";

export const Main = () => {
    return (
        <PageContainer backgroundColor="var(--linear_gradient, linear-gradient(173.93deg,#F9DDAA 4.81%, #EDE2CD 100%))">
            <Header type="main"></Header>
            <Menus />
        </PageContainer>
    );
};
