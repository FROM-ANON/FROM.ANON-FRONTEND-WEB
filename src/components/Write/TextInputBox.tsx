import { Column } from "components/common/Div";
import { StyledTextarea } from "components/common/Input";
import styled from "styled-components";
import { Palette } from "styles/Palette";
import { WriteMailState } from "recoil/atom";
import { useRecoilState } from "recoil";
import { useEffect, useRef } from "react";

export const TextInputBox = () => {
    const [writeState, setWriteState] = useRecoilState(WriteMailState);
    const handleTextChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const newText = event.target.value;
        setWriteState({ ...writeState, text: newText });
    };
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    useEffect(() => {
        if (textareaRef && textareaRef.current) {
            textareaRef.current.style.height = "0px";
            const scrollHeight = textareaRef.current.scrollHeight;
            textareaRef.current.style.height = scrollHeight + "px";
        }
    }, [writeState.text]);

    return (
        <Container>
            <TextInput
                ref={textareaRef}
                value={writeState.text}
                onChange={handleTextChange}
                placeholder="익명의 메세지를 작성해보세요."
            ></TextInput>
        </Container>
    );
};

const Container = styled(Column)`
    width: 300px;
    min-height: 300px;
    align-items: center;
    justify-content: flex-start;

    padding: 24px;

    border-radius: 25px;
    border: 1px solid ${Palette.Gray10};
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.25);

    &:focus-within {
        border: 1px solid ${Palette.Mandarin50};
        box-shadow: 1px 1px 10px 0px #ffd17f;
    }
`;

const TextInput = styled(StyledTextarea)`
    width: 100%;
    font-size: 12px;
`;
