import { axiosInstance } from "network/config";

export const searchApi = async (searchWord: string) => {
    try {
        let res = await axiosInstance.get(
            `/user/search?searchWord=${searchWord}`
        );
        return res;
    } catch (err) {
        throw err;
    }
};

export const getUserApi = async (userId: number) => {
    try {
        let res = await axiosInstance.get(`/user/${userId}`);
        return res;
    } catch (err) {
        throw err;
    }
};

export const delUserApi = async () => {
    try {
        let res = await axiosInstance.delete(`/user`);
        return res;
    } catch (err) {
        throw err;
    }
};
export const getUserByTokenApi = async () => {
    try {
        let res = await axiosInstance.get(`/user`);
        return res;
    } catch (err) {
        throw err;
    }
};
