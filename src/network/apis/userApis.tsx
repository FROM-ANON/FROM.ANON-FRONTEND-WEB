import { axiosInstance } from "network/config";

export const searchApi = async (searchWord: string) => {
    try {
        let res = await axiosInstance.get(
            `/user/search?searchWord=${searchWord}`
        );
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const getUserApi = async (userId: number) => {
    try {
        let res = await axiosInstance.get(`/user/${userId}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const delUserApi = async () => {
    try {
        let res = await axiosInstance.delete(`/user`);
        return res;
    } catch (err) {
        console.log(err);
    }
};
