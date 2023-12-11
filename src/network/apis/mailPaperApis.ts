import { axiosInstance } from "network/config";

export const getAllMailPapersApi = async () => {
    try {
        let res = await axiosInstance.get(`/mailpaper`);
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const getMailPaperApi = async (mailpaperId: number) => {
    try {
        let res = await axiosInstance.get(`/mailpaper/${mailpaperId}`);
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const getAllFavoriteMailPapersApi = async () => {
    try {
        let res = await axiosInstance.get(`/mailpaper/favorite`);
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const postFavoriteMailPaperApi = async (mailPaperId: number) => {
    try {
        let res = await axiosInstance.post(
            `/mailpaper/favorite/${mailPaperId}`
        );
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const delFavoriteMailPaperApi = async (fmpId: number) => {
    try {
        let res = await axiosInstance.delete(`/mailpaper/favorite/${fmpId}`);
        return res;
    } catch (err) {
        console.log(err);
    }
};
