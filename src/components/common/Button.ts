import styled from "styled-components";
import { Row } from "components/common/Div";

interface buttonProps {
    color: string;
    borderClr?: string;
}

export const StyledButton = styled(Row)<buttonProps>`
    width: 300px;
    height: 45px;

    justify-content: center;
    align-items: center;

    border-radius: 12px;
    border: ${(props) => `1px solid ${props.borderClr}`};
    background: ${({ color }) => color};

    cursor: pointer;
`;
