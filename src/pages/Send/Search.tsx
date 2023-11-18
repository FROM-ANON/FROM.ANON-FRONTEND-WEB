import { SearchBar } from "components/Search/SearchBar";
import { SearchResult } from "components/Search/SearchResult";
import { Column, PageContainer } from "components/common/Div";
import { Header } from "components/common/Header";
import { useState } from "react";

export const Search = () => {
    const [isSearched, setIsSearched] = useState<boolean>(false);
    const [text, setText] = useState<string>("");
    const [searchText, setSearchText] = useState<string>("");

    return (
        <PageContainer alignItems="center">
            <Header type="sub" text="편지 보내기" />
            <Column gap={29} alignItems="center" justifyContent="flex-start">
                <SearchBar
                    text={text}
                    setText={setText}
                    setIsSearched={setIsSearched}
                    setSearchText={setSearchText}
                />
                {isSearched && <SearchResult />}
            </Column>
        </PageContainer>
    );
};
