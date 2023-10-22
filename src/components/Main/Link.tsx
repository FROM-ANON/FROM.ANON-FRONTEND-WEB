import { Row } from "components/common/Div";
import { Toast } from "components/common/Toast";
import { useState } from "react";
import styled from "styled-components";
import { Palette } from "styles/Palette";
import Typo from "styles/Typo";

export const Link = () => {
    const [toast, setToast] = useState<boolean>(false);
    const handleClickButton = () => {
        try {
            const textArea = document.createElement("textarea");
            textArea.value = "https://from.anon/instaId";

            document.body.appendChild(textArea);

            textArea.select();
            document.execCommand("copy");

            document.body.removeChild(textArea);
            setToast(true);

            //3초 뒤 toast 팝업 삭제
            setTimeout(() => {
                setToast(false);
            }, 3000);
        } catch (error) {
            console.error("클립보드 복사 오류:", error);
        }
    };

    return (
        <Row gap={10}>
            <LinkDiv>
                <Typo.s3>https://from.anon/instaId</Typo.s3>
            </LinkDiv>
            <Button onClick={handleClickButton}>
                <Typo.s3>링크 복사</Typo.s3>
            </Button>
            <Toast show={toast} text="링크가 복사되었습니다." />
        </Row>
    );
};

const LinkDiv = styled(Row)`
    width: 200px;
    height: 21px;
    align-items: center;
    justify-content: flex-start;

    padding: 0 11px;

    border: 1px solid ${Palette.Mandarin};
    border-radius: 5px;
    background: ${Palette.White};
`;
const Button = styled(Row)`
    width: 55px;
    height: 21px;
    align-items: center;
    justify-content: center;

    border-radius: 5px;
    background: ${Palette.Mandarin};
    color: ${Palette.White};
`;
