import { Column, Row } from "components/common/Div";
import styled from "styled-components";
import { Palette } from "styles/Palette";
import Typo from "styles/Typo";
import trashbin from "assets/icons/trashbin-colored.svg";
import { useEffect, useState } from "react";
import { Toast } from "components/common/Toast";
import { Confirm } from "components/common/modal/Confirm";
import { Img } from "components/common/Img";
import { mailType } from "types";
import { useNavigate } from "react-router-dom";

export const Mail = ({ mail }: { mail: mailType | undefined }) => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const handleDelete = () => {
        setIsModalOpen(true);
    };
    const [isConfirmedToDelete, setIsConfirmedToDelete] =
        useState<boolean>(false);
    useEffect(() => {
        if (isConfirmedToDelete) {
            navigate("/inbox");
        }
    }, [isConfirmedToDelete]);
    return (
        <Container>
            {mail !== undefined && (
                <>
                    <ContentText>
                        <u>{mail.text}</u>
                    </ContentText>
                    <Row justifyContent="space-between" alignItems="center">
                        <Typo.s4 color={Palette.Mandarin}>
                            {mail.createdTime}
                        </Typo.s4>
                        <Img
                            src={trashbin}
                            onClick={handleDelete}
                            width={14}
                            height={13.96}
                            alt="delete button"
                        />
                    </Row>
                    {isModalOpen && (
                        <Confirm
                            text="편지를 삭제하시겠습니까?"
                            type="delete"
                            setIsModalOpenState={setIsModalOpen}
                            setIsConfirmedToAction={setIsConfirmedToDelete}
                            mailId={mail.mailId}
                        />
                    )}
                </>
            )}
        </Container>
    );
};

const Container = styled(Column)`
    width: 300px;
    min-height: 300px;

    align-items: flex-start;
    justify-content: space-between;

    margin: 5px auto;
    padding: 25px;
    gap: 30px;

    border-radius: 25px;
    background: rgba(255, 255, 255, 0.5);
`;
const ContentText = styled(Typo.b4)`
    line-height: 200%;
`;
