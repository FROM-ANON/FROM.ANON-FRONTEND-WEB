import { Column, Row } from "components/common/Div";
import styled from "styled-components";
import { Palette } from "styles/Palette";
import Typo from "styles/Typo";
import trashbin from "assets/icons/trashbin-colored.svg";
import { useRecoilState } from "recoil";
import { alertOpenState } from "recoil/atom";
import { Alert } from "components/common/Alert";

export const Mail = () => {
    const [alertState, setAlertState] = useRecoilState(alertOpenState);
    const handleDelete = () => {
        setAlertState({ ...alertState, isOpen: true });
    };

    return (
        <Container>
            <Typo.b4>
                편지글 내용 편지글 내용 편지글 내용 편지글 내용 편지글 내용
                편지글 내용 편지글 내용 편지글 내용 편지글 내용 편지글 내용
                편지글 내용 편지글 내용 편지글 내용 편지글 내용 편지글 내용
                편지글 내용 편지글 내용 편지글 내용 편지글 내용 ...편지글 내용
                편지글 내용 편지글 내용 편지글 내용 편지글 내용 편지글 내용
                편지글 내용 편지글 내용 편지글 내용 편지글 내용 편지글 내용
                편지글 내용
            </Typo.b4>
            <Row justifyContent="space-between" alignItems="center">
                <Typo.s4 color={Palette.Mandarin}>23.10.30 1:00:21</Typo.s4>
                <Img
                    src={trashbin}
                    onClick={handleDelete}
                    alt="delete button"
                />
            </Row>
            {alertState.isOpen && (
                <Alert text="편지를 삭제하시겠습니까?" type="confirm"></Alert>
            )}
        </Container>
    );
};

const Container = styled(Column)`
    width: 300px;
    min-height: 300px;

    align-items: center;
    justify-content: space-between;

    margin: 25px auto;
    padding: 25px;

    border: 1px solid ${Palette.Mandarin};
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background: ${Palette.White};
`;
const Img = styled.img`
    width: 13px;
    height: 13px;
`;
