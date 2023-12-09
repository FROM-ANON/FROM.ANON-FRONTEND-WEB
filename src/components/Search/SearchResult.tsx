import { StyledButton } from "components/common/Button";
import { Column } from "components/common/Div";
import styled from "styled-components";
import { Palette } from "styles/Palette";
import Typo from "styles/Typo";
import { InstaIdInfo } from "./InstaIdInfo";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { searchApi } from "network/apis/userApis";
import { userType } from "types";
export const SearchResult = ({ searchText }: { searchText: string }) => {
    const navigate = useNavigate();
    const [userList, setUserList] = useState<
        { user: userType; isClicked: boolean }[]
    >([]);

    useEffect(() => {
        const search = async () => {
            try {
                let res = await searchApi(searchText);
                setUserList(
                    res.map((user: userType) => ({
                        user: user,
                        isClicked: false,
                    }))
                );
            } catch (err) {
                console.log(err);
            }
        };
        search();
    }, [searchText]);

    const handleClickId = (id: number) => {
        const updated = userList.map((user) => ({
            ...user,
            isClicked:
                id === user.user.instaUserId ? !user.isClicked : user.isClicked,
        }));
        setUserList(updated);
    };

    const handleSendBtn = () => {
        const clickedUser = userList.find((user) => user.isClicked === true);
        if (clickedUser) {
            navigate(`/send/write/${clickedUser.user.userId}`);
        }
    };

    return (
        <Column alignItems="center">
            <Column alignItems="center">
                {userList.map((user, index) => (
                    <InstaIdInfo
                        key={index}
                        user={user.user}
                        isClicked={user.isClicked}
                        onClick={() => handleClickId(user.user.instaUserId)}
                    />
                ))}
            </Column>
            <SendBtn
                onClick={handleSendBtn}
                color={
                    userList.some((user) => user.isClicked)
                        ? Palette.Mandarin
                        : Palette.Gray05
                }
                isClicked={userList.some((user) => user.isClicked)}
            >
                <Typo.b3
                    color={
                        userList.some((user) => user.isClicked)
                            ? Palette.White
                            : Palette.Gray50
                    }
                >
                    메세지 보내기
                </Typo.b3>
            </SendBtn>
        </Column>
    );
};

const SendBtn = styled(StyledButton)<{ isClicked: boolean }>`
    position: absolute;
    bottom: 50px;
    cursor: ${(props) => !props.isClicked && `default`};
`;
