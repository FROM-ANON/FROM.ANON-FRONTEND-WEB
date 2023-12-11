import { Row } from "components/common/Div";
import { Confirm } from "components/common/modal/Confirm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Palette } from "styles/Palette";
import Typo from "styles/Typo";

export const Buttons = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleWritePaperClick = () => {
        navigate("/mailpaper");
    };
    const handleAttachPicClick = () => {
        setIsModalOpen(true);
    };

    return (
        <Row gap={10}>
            <Button onClick={handleWritePaperClick}>
                <Typo.s2 color={Palette.Gray60}>편지지 선택하기</Typo.s2>
            </Button>
            <Button onClick={handleAttachPicClick}>
                <Typo.s2 color={Palette.Gray60}>사진 첨부하기</Typo.s2>
            </Button>
            {isModalOpen && (
                <Confirm
                    text="해당 기능은 프로버전에서만 제공됩니다.   
                    지금 업그레이드 하시겠습니까?"
                    type="proUpgrade"
                    setIsModalOpenState={setIsModalOpen}
                ></Confirm>
            )}
        </Row>
    );
};

const Button = styled(Row)`
    width: 110px;
    height: 43px;
    justify-content: center;
    align-items: center;

    border-radius: 12px;
    background: ${Palette.Gray05};

    cursor: pointer;
`;
