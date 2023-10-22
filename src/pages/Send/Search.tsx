import { SearchBar } from "components/Search/SearchBar";
import { SearchResult } from "components/Search/SearchResult";
import { Column } from "components/common/Div";
import { Header } from "components/common/Header";
import { Notice } from "components/common/Notice";
import { useState } from "react";

export const Search = () => {
    const [isSearched, setIsSearched] = useState<boolean>(false);
    const [text, setText] = useState<string>("");
    const [searchText, setSearchText] = useState<string>("");

    return (
        <Column alignItems="center">
            <Header type="sub" text="편지 보내기" />
            <Notice text="익명의 힘으로 진정성 있는 메세지를 전달해 보세요." />
            <SearchBar
                text={text}
                setText={setText}
                setIsSearched={setIsSearched}
                setSearchText={setSearchText}
            />
            {isSearched && <SearchResult />}
        </Column>
    );
};
