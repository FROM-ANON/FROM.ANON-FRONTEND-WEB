import { Row } from "components/common/Div";
import { Img } from "components/common/Img";
import styled from "styled-components";
import { Palette } from "styles/Palette";
import Typo from "styles/Typo";
import chain from "assets/icons/chain.svg";

export const Link = () => {
    const handleClickButton = () => {
        try {
            const textArea = document.createElement("textarea");
            textArea.value = "https://from.anon/instaId";

            document.body.appendChild(textArea);

            textArea.select();
            document.execCommand("copy");

            document.body.removeChild(textArea);
        } catch (error) {
            console.error("클립보드 복사 오류:", error);
        }
    };

    return (
        <Row gap={10}>
            <LinkAddress>
                <Img src={chain} width={20} height={20} alt="chain img"></Img>
                <Typo.s4 color={Palette.Gray60}>
                    https://from-anon.vercel.app/instaId
                </Typo.s4>
            </LinkAddress>
            <Button onClick={handleClickButton}>
                <Typo.s4 color={Palette.Gray60}>복사</Typo.s4>
            </Button>
        </Row>
    );
};

const LinkAddress = styled(Row)`
    width: 225px;
    height: 29px;
    align-items: center;
    justify-content: flex-start;

    padding: 0 5px;
    gap: 5px;

    border-radius: 12px;
    background: ${Palette.Gray05};
`;
const Button = styled(Row)`
    width: 41px;
    height: 29px;
    align-items: center;
    justify-content: center;

    border-radius: 12px;
    background: ${Palette.Gray20};
`;
