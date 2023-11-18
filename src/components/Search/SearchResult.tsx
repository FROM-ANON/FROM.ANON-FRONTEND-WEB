import { Button } from "components/common/Button";
import { Column } from "components/common/Div";
import styled from "styled-components";
import { Palette } from "styles/Palette";
import Typo from "styles/Typo";
import { InstaIdInfo } from "./InstaIdInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchResult = () => {
    const navigate = useNavigate();
    const [idList, setIdList] = useState([
        { isClicked: false },
        { isClicked: false },
        { isClicked: false },
        { isClicked: false },
    ]);
    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleClickId = (index: number) => {
        const updated = idList.map((item, idindex) => {
            if (idindex === index) {
                setIsClicked(!item.isClicked);
                return { ...item, isClicked: !item.isClicked };
            }
            return { ...item, isClicked: false };
        });
        setIdList(updated);
    };
    const handleSendBtn = () => {
        if (isClicked) {
            navigate("/send/write");
        }
    };

    return (
        <Column alignItems="center">
            <Column alignItems="center">
                {idList.map((item, index) => (
                    <InstaIdInfo
                        key={index}
                        isClicked={item.isClicked}
                        onClick={() => handleClickId(index)}
                    />
                ))}
            </Column>
            <SendBtn
                onClick={handleSendBtn}
                color={isClicked ? Palette.Mandarin : Palette.Gray05}
                isClicked={isClicked}
            >
                <Typo.b3 color={isClicked ? Palette.White : Palette.Gray50}>
                    메세지 보내기
                </Typo.b3>
            </SendBtn>
        </Column>
    );
};

const SendBtn = styled(Button)<{ isClicked: boolean }>`
    position: absolute;
    bottom: 50px;
    cursor: ${(props) => !props.isClicked && `default`};
`;
