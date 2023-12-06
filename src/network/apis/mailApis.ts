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
        return res.data;
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
