import { Row } from "components/common/Div";
import styled from "styled-components";
import search from "assets/icons/search.svg";
import { Palette } from "styles/Palette";
import deleteSearch from "assets/icons/delete-search.svg";

interface searchBarProps {
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
    setIsSearched: React.Dispatch<React.SetStateAction<boolean>>;
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar = ({
    text,
    setText,
    setIsSearched,
    setSearchText,
}: searchBarProps) => {
    const toggleSearched = () => {
        setIsSearched(true);
        setSearchText(text);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            toggleSearched();
        }
    };
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newText = event.target.value;
        setText(newText);
    };
    const handleDeleteText = () => {
        setText("");
    };

    return (
        <Container>
            <Row gap={14} alignItems="center" justifyContent="flex-start">
                <Img src={search} alt="search icon" />
                <SearchInput
                    type="text"
                    value={text}
                    onChange={handleTextChange}
                    onKeyUp={handleKeyPress}
                    placeholder="인스타그램 아이디를 입력하세요."
                ></SearchInput>
            </Row>
            {text && (
                <Img
                    src={deleteSearch}
                    onClick={handleDeleteText}
                    alt="deleted search text"
                />
            )}
        </Container>
    );
};

const Container = styled(Row)`
    width: 300px;
    height: 32px;

    align-items: center;
    justify-content: space-between;

    margin: 25px;
    padding: 0 15px;

    border-radius: 10px;
    background: ${Palette.Gray10};
`;
const Img = styled.img``;
const SearchInput = styled.input`
    width: 85%;
    border: none;
    background: ${Palette.Gray10};

    font-family: PretendardMedium;
    font-size: 12px;
    line-height: 150%;

    &:focus {
        outline: none;
    }
`;
