import { atom } from "recoil";

export const alertOpenState = atom({
    key: "alertOpenState",
    default: {
        isOpen: false,
    },
});
