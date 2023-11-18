import styled from "styled-components";

interface divProps {
    gap?: number;
    justifyContent?: string;
    alignItems?: string;
    backgroundColor?: string;
}

export const Row = styled.div<divProps>`
    display: flex;
    flex-direction: row;
    width: 100%;

    gap: ${(props) => `${props.gap}px`};
    align-items: ${(props) => props.alignItems};
    justify-content: ${(props) => props.justifyContent};
    background-color: ${(props) => props.backgroundColor};
`;

export const Column = styled.div<divProps>`
    display: flex;
    flex-direction: column;
    width: 100%;

    gap: ${(props) => `${props.gap}px`};
    align-items: ${(props) => props.alignItems};
    justify-content: ${(props) => props.justifyContent};
    background: ${(props) => props.backgroundColor};
`;

export const PageContainer = styled(Column)`
    width: 100vw;
    height: 100vh;
`;
