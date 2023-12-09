import styled from "styled-components";

export const StyledInput = styled.input`
    border: none;
    background: transparent;

    font-family: PretendardMedium;
    line-height: 150%;

    &:focus {
        outline: none;
    }
`;

export const StyledTextarea = styled.textarea`
    border: none;
    background: transparent;

    font-family: PretendardMedium;
    line-height: 150%;

    resize: none;
    overflow-y: hidden;

    &:focus {
        outline: none;
    }
`;
