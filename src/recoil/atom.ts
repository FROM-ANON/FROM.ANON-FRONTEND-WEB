import { atom } from "recoil";

export const alertOpenState = atom({
    key: "alertOpenState",
    default: {
        isOpen: false,
    },
});

export const WriteMailState = atom({
    key: "writeMailState",
    default: {
        userId: 1,
        mailPaperId: 1,
        text: "",
    },
});
