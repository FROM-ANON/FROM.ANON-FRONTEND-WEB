import styled from "styled-components";
import { Row } from "components/common/Div";
import Typo from "styles/Typo";
import trashbin from "assets/icons/trashbin.svg";
import { Palette } from "styles/Palette";
import { useRecoilState } from "recoil";
import { clickedMailListState } from "recoil/atom";
import { alertOpenState } from "recoil/atom";
import { Alert } from "components/common/Alert";

export const Selected = () => {
    const [alertState, setAlertState] = useRecoilState(alertOpenState);
    const [mailState, setMailState] = useRecoilState(clickedMailListState);
    const mail = mailState.mail;

    const countClickedMails = () => {
        const clickedMails = mail.filter((mailItem) => mailItem.isClicked);
        return clickedMails.length;
    };
    const handleClickAll = () => {
        const updatedMail = mail.map((mailItem, index) => {
            //전체 편지가 선택된 경우에는 isClicked를 모두 false로 변경
            return {
                ...mailItem,
                isClicked: countClickedMails() !== mail.length,
            };
        });

        setMailState({ ...mailState, mail: updatedMail });
    };
    const handleDelete = () => {
        setAlertState({ ...alertState, isOpen: true });
    };

    return (
        <Container>
            <SelectAllBtn onClick={handleClickAll}>
                <Typo.s3>전체선택</Typo.s3>
            </SelectAllBtn>
            <Typo.b3 color={Palette.White}>
                {countClickedMails()}개의 편지가 선택됨
            </Typo.b3>
            <Img src={trashbin} onClick={handleDelete}></Img>
            {alertState.isOpen && (
                <Alert
                    text={`${countClickedMails()}개의 편지를 삭제하시겠습니까?`}
                    type="confirm"
                ></Alert>
            )}
        </Container>
    );
};

const Container = styled(Row)`
    height: 44px;
    align-items: center;
    justify-content: space-between;

    padding: 0 23px;
    background: ${Palette.Mandarin};
`;
const Img = styled.img`
    width: 13px;
    height: 13px;
`;
const SelectAllBtn = styled(Row)`
    width: 45px;
    height: 21px;
    align-items: center;
    justify-content: center;

    border-radius: 4px;
    border: 1px solid ${Palette.White};
    background: ${Palette.Mandarin};
    color: ${Palette.White};
`;
