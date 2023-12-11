import { Column, PageContainer } from "components/common/Div";
import { Header } from "components/common/Header";
import { Menus } from "../../components/Main/Menus";
import { Footer } from "components/common/Footer";
import { LogoutOrDelUser } from "components/Main/LogoutOrDelUser";
import styled from "styled-components";

export const Main = () => {
    return (
        <Container
            backgroundColor="var(--linear_gradient, linear-gradient(173.93deg,#F9DDAA 4.81%, #EDE2CD 100%))"
            gap={25}
        >
            <Header type="main"></Header>
            <Menus />
            <Column>
                <LogoutOrDelUser type="logout" />
                <LogoutOrDelUser type="delUser" />
            </Column>
            <Footer />
        </Container>
    );
};

const Container = styled(Column)`
    height: 100%;
`;
