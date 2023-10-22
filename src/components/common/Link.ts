import { Link } from "react-router-dom";
import styled from "styled-components";
import { Palette } from "styles/Palette";

export const StyledLink = styled(Link)<{ color?: string }>`
    text-decoration: none;
    color: ${({ color }) => (color ? color : Palette.Black)};
`;
