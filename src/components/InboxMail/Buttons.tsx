import { Button } from "components/common/Button";
import { Column } from "components/common/Div";
import { Palette } from "styles/Palette";
import Typo from "styles/Typo";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { alertOpenState } from "recoil/atom";
import { Alert } from "components/common/Alert";

export const Buttons = () => {
    const [alertState, setAlertState] = useRecoilState(alertOpenState);
    const handleReport = () => {
        setAlertState({ ...alertState, isOpen: true });
    };

    return (
        <Container gap={16} alignItems="center">
            <Button color="var(--linear_gradient, linear-gradient(90deg, rgba(255, 214, 0, 0.90) 0%, rgba(255, 122, 0, 0.90) 24.48%, rgba(255, 0, 105, 0.90) 39.58%, rgba(211, 0, 197, 0.90) 60.42%, rgba(118, 56, 250, 0.90) 79.69%))">
                <Typo.b3 color={Palette.White}>
                    인스타그램 스토리로 답장하기
                </Typo.b3>
            </Button>
            <Button color={Palette.Gray30} onClick={handleReport}>
                <Typo.b3 color={Palette.White}>신고하기</Typo.b3>
            </Button>
            {alertState.isOpen && (
                <Alert text="편지를 신고하시겠습니까?" type="confirm"></Alert>
            )}
        </Container>
    );
};

const Container = styled(Column)`
    position: absolute;
    bottom: 50px;
`;
