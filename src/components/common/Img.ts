import styled from "styled-components";

interface imgProps {
    width: number;
    height: number;
}

export const Img = styled.img<imgProps>`
    width: ${(props) => `${props.width}px`};
    height: ${(props) => `${props.height}px`};
`;
