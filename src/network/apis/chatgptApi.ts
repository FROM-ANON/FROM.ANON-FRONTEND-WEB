import { axiosInstance } from "network/config";

export const gptCheckContentApi = async ({ content }: { content: string }) => {
    try {
        const body = { content: content };
        let res = await axiosInstance.post(`/chatgpt`, body);
        return res;
    } catch (err) {
        return err;
    }
};
