import styled from "styled-components";
import { ToggleMenu } from "components/common/ToggleMenu";
import { Mail } from "./Mail";
import { Column } from "components/common/Div";
import { Palette } from "styles/Palette";
import { useRecoilState } from "recoil";
import { clickedMailListState } from "recoil/atom";

export const MailList = () => {
    const [mailState, setMailState] = useRecoilState(clickedMailListState);
    const mail = mailState.mail;

    const handleMailClick = (index: number) => {
        const updatedMail = mail.map((mailItem, mailIndex) => {
            if (mailIndex === index) {
                // 클릭한 메일의 isClicked를 토글
                return { ...mailItem, isClicked: !mailItem.isClicked };
            }
            return mailItem;
        });

        setMailState({ ...mailState, mail: updatedMail });
    };

    return (
        <Container>
            <ToggleMenu />
            {mail.map((mailItem, index) => (
                <Mail
                    key={index}
                    isClicked={mailItem.isClicked}
                    onClick={() => handleMailClick(index)}
                />
            ))}
        </Container>
    );
};

const Container = styled(Column)`
    border-bottom: 1px solid ${Palette.Mandarin50};
`;
