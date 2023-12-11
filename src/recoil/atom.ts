import { RecoilState, atom } from "recoil";
import { favoriteMPType, mailpaperType } from "types";

export const alertOpenState = atom({
    key: "alertOpenState",
    default: {
        isOpen: false,
    },
});

export const WriteMailState = atom({
    key: "writeMailState",
    default: {
        instaId: "",
        mailPaperId: 1,
        text: "",
    },
});

export const deleteMailState = atom({
    key: "deleteMailState",
    default: {
        mailId: 0,
        isConfirmedToDelete: false,
    },
});

type mailPaperStateType = {
    mailPaperList: mailpaperType[];
    favoriteMailPaperList: favoriteMPType[];
};

export const mailPaperState = atom<mailPaperStateType>({
    key: "mailPaperState",
    default: {
        mailPaperList: [],
        favoriteMailPaperList: [],
    },
});
