import { StyledButton } from "components/common/Button";
import { Column } from "components/common/Div";
import { Palette } from "styles/Palette";
import Typo from "styles/Typo";
import styled from "styled-components";
import { Confirm } from "components/common/modal/Confirm";
import { useEffect, useState } from "react";
import { Toast } from "components/common/Toast";

export const Buttons = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const handleReportClick = () => {
        setIsModalOpen(true);
    };

    const [toast, setToast] = useState<boolean>(false);
    const [isConfirmedToReport, setIsConfirmedToReport] =
        useState<boolean>(false);
    useEffect(() => {
        if (isConfirmedToReport) {
            setToast(true);
            setTimeout(() => {
                setToast(false);
            }, 2000);

            setIsConfirmedToReport(false);
        }
    }, [isConfirmedToReport]);

    return (
        <Container gap={12} alignItems="center">
            <StyledButton color="var(--linear_gradient, linear-gradient(90deg, rgba(255, 214, 0, 0.90) 0%, rgba(255, 122, 0, 0.90) 24.48%, rgba(255, 0, 105, 0.90) 39.58%, rgba(211, 0, 197, 0.90) 60.42%, rgba(118, 56, 250, 0.90) 79.69%))">
                <Typo.b3 color={Palette.White}>
                    인스타그램 스토리로 답장하기
                </Typo.b3>
            </StyledButton>
            <StyledButton color={Palette.Gray05} onClick={handleReportClick}>
                <Typo.b3 color={Palette.Gray50}>신고하기</Typo.b3>
            </StyledButton>
            {isModalOpen && (
                <Confirm
                    text="편지를 신고하시겠습니까?"
                    type="report"
                    setIsModalOpenState={setIsModalOpen}
                    setIsConfirmedToAction={setIsConfirmedToReport}
                ></Confirm>
            )}
            <Toast show={toast} text="신고되었습니다." />
        </Container>
    );
};

const Container = styled(Column)`
    position: absolute;
    bottom: 50px;
`;
