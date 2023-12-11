import { Row } from "components/common/Div";
import logout from "assets/icons/logout.svg";
import delUser from "assets/icons/del-user.svg";
import Typo from "styles/Typo";
import { Img } from "components/common/Img";
import { Palette } from "styles/Palette";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Confirm } from "components/common/modal/Confirm";

export const LogoutOrDelUser = ({ type }: { type: string }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isConfirmedToDelete, setIsConfirmedToDelete] =
        useState<boolean>(false);
    const typeIdx: number = type === "logout" ? 0 : 1;
    const handleLogout = () => {
        window.localStorage.clear();
        window.location.href = "/login";
    };
    const handleDelUser = async () => {
        setIsModalOpen(true);
    };
    useEffect(() => {
        //회원탈퇴 확인 클릭시 /login으로 이동
        if (isConfirmedToDelete) {
            window.location.href = "/login";
        }
    }, [isConfirmedToDelete]);

    const typeState = [
        { text: "로그아웃", src: logout, onClick: handleLogout },
        { text: "회원탈퇴", src: delUser, onClick: handleDelUser },
    ];

    return (
        <Container justifyContent="flex-end" alignItems="center" gap={11}>
            <Typo.s2 color={Palette.Gray50}>{typeState[typeIdx].text}</Typo.s2>
            <Img
                src={typeState[typeIdx].src}
                width={14}
                height={14}
                onClick={typeState[typeIdx].onClick}
                alt="icon"
            />
            {isModalOpen && (
                <Confirm
                    text="회원 탈퇴하시겠습니까? 모든 데이터가 영구 삭제됩니다."
                    type="delUser"
                    setIsModalOpenState={setIsModalOpen}
                    setIsConfirmedToAction={setIsConfirmedToDelete}
                ></Confirm>
            )}
        </Container>
    );
};

const Container = styled(Row)`
    padding: 5px 31px;
`;
