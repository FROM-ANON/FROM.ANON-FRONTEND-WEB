import { axiosInstance } from "../config";

export const postMailApi = async ({
    userId,
    mailPaperId,
    text,
}: {
    userId: number;
    mailPaperId: number;
    text: string;
}) => {
    try {
        const body = {
            userId: userId,
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
        console.log(res.data);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const getMailApi = async (mailId: number) => {
    try {
        let res = await axiosInstance.get(`/mail/${mailId}`);
        console.log(res.data);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const deleteMailApi = async (mailId: number) => {
    try {
        let res = await axiosInstance.delete(`/mail/${mailId}`);
        console.log(res.data);
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
