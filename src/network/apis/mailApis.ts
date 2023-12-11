import { axiosInstance } from "../config";

export const postMailApi = async ({
    instaId,
    mailPaperId,
    text,
}: {
    instaId: string;
    mailPaperId: number;
    text: string;
}) => {
    try {
        const body = {
            instaId: instaId,
            mailPaperId: mailPaperId,
            text: text,
        };
        let res = await axiosInstance.post(`/mail`, body);
        return res;
    } catch (err) {
        console.log(err);
    }
};

export const getAllMailsApi = async () => {
    try {
        let res = await axiosInstance.get("/mail");
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
export const getAllNotReadMailsApi = async () => {
    try {
        let res = await axiosInstance.get("/mail/notread");
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const getMailApi = async (mailId: number) => {
    try {
        let res = await axiosInstance.get(`/mail/${mailId}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const deleteMailApi = async (mailId: number) => {
    try {
        let res = await axiosInstance.delete(`/mail/${mailId}`);
    } catch (err) {
        console.log(err);
    }
};

export const reportMailApi = async (mailId: number) => {
    try {
        await axiosInstance.post(`/mail/report/${mailId}`);
    } catch (err) {
        console.log(err);
    }
};
