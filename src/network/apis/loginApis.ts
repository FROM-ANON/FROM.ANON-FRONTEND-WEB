import { axiosInstance } from "network/config";

export const loginAndGetTokensApi = async (code: string) => {
    try {
        let body = { code: code };
        let res = await axiosInstance.post(`/login`, body);
        //토큰 값을 localStorage에 저장
        window.localStorage.setItem("accessToken", res.data.accessToken);
        window.localStorage.setItem("refreshToken", res.data.refreshToken);

        //회원가입/로그인 구분
        if (res.data.isNewUser) {
            window.location.href = "/login/terms";
        } else {
            window.location.href = "/";
        }
        console.log(res.data);
        return res.data;
    } catch (err) {
        console.log(err);
        alert("로그인에 실패하였습니다. 다시 시도해주십시오.");
        window.location.href = "/login";
    }
};

export const signupApi = async () => {
    try {
        let res = await axiosInstance.post("/signup");
        console.log(res.data);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
