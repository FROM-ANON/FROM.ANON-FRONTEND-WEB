import { atom } from "recoil";

export const clickedMailListState = atom({
    key: "clickedMailListState",
    default: {
        mail: [
            { isClicked: false },
            { isClicked: false },
            { isClicked: false },
            { isClicked: false },
        ],
    },
});

export const alertOpenState = atom({
    key: "alertOpenState",
    default: {
        isOpen: false,
    },
});
