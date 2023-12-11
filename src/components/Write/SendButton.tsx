import { StyledButton } from "components/common/Button";
import styled from "styled-components";
import Typo from "styles/Typo";
import { useRecoilState } from "recoil";
import { WriteMailState, alertOpenState } from "recoil/atom";
import { Palette } from "styles/Palette";
import { Row } from "components/common/Div";
import { useNavigate } from "react-router-dom";
import { postMailApi } from "network/apis/mailApis";
import { gptCheckContentApi } from "network/apis/chatgptApi";
import { Alert } from "components/common/modal/Alert";

export const SendButton = () => {
    const navigate = useNavigate();
    const [writeState, setWriteState] = useRecoilState(WriteMailState);
    const [alertState, setAlertState] = useRecoilState(alertOpenState);

    const handleClick = async () => {
        let response: any = await gptCheckContentApi({
            content: writeState.text,
        });
        //비방성 또는 성희롱성 글이 아닌 경우
        if (response?.status === 200) {
            let res = await postMailApi({
                //메일 전송
                userId: writeState.userId,
                mailPaperId: writeState.mailPaperId,
                text: writeState.text,
            });
            if (res?.status === 201) {
                //메일 전송 성공
                console.log(res);
                //WriteMailState 초기화
                setWriteState({
                    userId: 1,
                    mailPaperId: 1,
                    text: "",
                });

                navigate("/send/success");
            }
        }
        //비방성 또는 성희롱성 글인 경우
        else if (response?.response?.status === 406) {
            setAlertState({ isOpen: true });
        }
    };

    return (
        <Container>
            <Button isEmpty={!writeState.text} onClick={handleClick}>
                <Typo.b3>전송하기</Typo.b3>
            </Button>
            {alertState.isOpen && (
                <Alert text="ChatGPT가 상대를 비방하거나 성희롱하는 내용으로 판단하였습니다. 다시 작성해 주세요."></Alert>
            )}
        </Container>
    );
};

const Container = styled(Row)`
    width: 100vw;
    padding: 37px 0;

    align-items: center;
    justify-content: center;

    background: rgba(255, 255, 255, 0.8);

    position: fixed;
    bottom: 0;
`;

const Button = styled(StyledButton)<{ isEmpty: boolean }>`
    background: ${(props) =>
        props.isEmpty ? Palette.Gray05 : Palette.Mandarin};
    color: ${(props) => (props.isEmpty ? Palette.Gray50 : Palette.White)};
    cursor: ${(props) => (props.isEmpty ? `default` : `pointer`)};
`;
