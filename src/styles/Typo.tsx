import styled from "styled-components";

const Typo = () => {
    return <></>;
};

const Heading1 = styled.text<{ color?: string }>`
    font-family: PretendardBold;
    font-size: 28px;
    line-height: 150%;
    color: ${({ color }) => color};
`;
const Heading2 = styled.text<{ color?: string }>`
    font-family: PretendardMedium;
    font-size: 28px;
    line-height: 150%;
    color: ${({ color }) => color};
`;
const Heading3 = styled.text<{ color?: string }>`
    font-family: PretendardMedium;
    font-size: 24px;
    line-height: 150%;
    color: ${({ color }) => color};
`;
const Body1 = styled.text<{ color?: string }>`
    font-family: PretendardBold;
    font-size: 18px;
    line-height: 150%;
    color: ${({ color }) => color};
`;
const Body2 = styled.text<{ color?: string }>`
    font-family: PretendardBold;
    font-size: 16px;
    line-height: 150%;
    color: ${({ color }) => color};
`;
const Body3 = styled.text<{ color?: string }>`
    font-family: PretendardBold;
    font-size: 14px;
    line-height: 150%;
    color: ${({ color }) => color};
`;
const Body4 = styled.text<{ color?: string }>`
    font-family: PretendardMedium;
    font-size: 14px;
    line-height: 150%;
    color: ${({ color }) => color};
`;
const Small1 = styled.text<{ color?: string }>`
    font-family: PretendardBold;
    font-size: 12px;
    line-height: 150%;
    color: ${({ color }) => color};
`;
const Small2 = styled.text<{ color?: string }>`
    font-family: PretendardMedium;
    font-size: 12px;
    line-height: 150%;
    color: ${({ color }) => color};
`;
const Small3 = styled.text<{ color?: string }>`
    font-family: PretendardBold;
    font-size: 10px;
    line-height: 150%;
    color: ${({ color }) => color};
`;
const Small4 = styled.text<{ color?: string; opacity?: number }>`
    font-family: PretendardMedium;
    font-size: 10px;
    line-height: 150%;
    color: ${({ color }) => color};
    opacity: ${({ opacity }) => opacity};
`;

Typo.h1 = Heading1;
Typo.h2 = Heading2;
Typo.h3 = Heading3;
Typo.b1 = Body1;
Typo.b2 = Body2;
Typo.b3 = Body3;
Typo.b4 = Body4;
Typo.s1 = Small1;
Typo.s2 = Small2;
Typo.s3 = Small3;
Typo.s4 = Small4;

export default Typo;
