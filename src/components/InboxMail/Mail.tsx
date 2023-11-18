import { Column, Row } from "components/common/Div";
import styled from "styled-components";
import { Palette } from "styles/Palette";
import Typo from "styles/Typo";
import trashbin from "assets/icons/trashbin-colored.svg";
import { useRecoilState } from "recoil";
import { alertOpenState } from "recoil/atom";
import { useEffect, useState } from "react";
import { Toast } from "components/common/Toast";
import { Confirm } from "components/common/modal/Confirm";
import { Img } from "components/common/Img";

export const Mail = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const handleDelete = () => {
        setIsModalOpen(true);
    };
    const [toast, setToast] = useState<boolean>(false);
    const [isConfirmedToDelete, setIsConfirmedToDelete] =
        useState<boolean>(false);
    useEffect(() => {
        if (isConfirmedToDelete) {
            setToast(true);
            setTimeout(() => {
                setToast(false);
            }, 2000);

            setIsConfirmedToDelete(false);
        }
    }, [isConfirmedToDelete]);
    return (
        <Container>
            <ContentText>
                <u>
                    편지글 내용 편지글 내용 편지글 내용 편지글 내용 편지글 내용
                    편지글 내용 편지글 내용 편지글 내용 편지글 내용 편지글 내용
                    편지글 내용 편지글 내용 편지글 내용 편지글 내용 편지글 내용
                    편지글 내용 편지글 내용 편지글 내용 편지글 내용 ...편지글
                    내용 편지글 내용 편지글 내용 편지글 내용 편지글 내용 편지글
                    내용 편지글 내용 편지글 내용 편지글 내용 편지글 내용 편지글
                    내용 편지글 내용
                </u>
            </ContentText>
            <Row justifyContent="space-between" alignItems="center">
                <Typo.s4 color={Palette.Mandarin}>23.10.30 1:00:21</Typo.s4>
                <Img
                    src={trashbin}
                    onClick={handleDelete}
                    width={14}
                    height={13.96}
                    alt="delete button"
                />
            </Row>
            {isModalOpen && (
                <Confirm
                    text="편지를 삭제하시겠습니까?"
                    type="delete"
                    setIsModalOpenState={setIsModalOpen}
                    setIsConfirmedToAction={setIsConfirmedToDelete}
                ></Confirm>
            )}
            <Toast show={toast} text="삭제되었습니다." />
        </Container>
    );
};

const Container = styled(Column)`
    width: 300px;
    min-height: 300px;

    align-items: center;
    justify-content: space-between;

    margin: 5px auto;
    padding: 24px;
    gap: 30px;

    border-radius: 25px;
    background: rgba(255, 255, 255, 0.9);
`;
const ContentText = styled(Typo.b4)`
    line-height: 200%;
`;
