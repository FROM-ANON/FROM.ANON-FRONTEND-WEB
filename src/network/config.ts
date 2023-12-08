import axios from "axios";

export const BASE_URL = "http://localhost:8080";

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

/* interceptors */
const getTokens = () => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    return { accessToken, refreshToken };
};
const setAccessToken = (accessToken: string) => {
    localStorage.setItem("accessToken", accessToken);
};

//요청시 헤더에 accessToken 추가
axiosInstance.interceptors.request.use(
    async (config) => {
        const { accessToken, refreshToken } = getTokens();
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

//access token이 만료되었을시 재발급
axiosInstance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalRequest = err.config;
        const { accessToken, refreshToken } = getTokens();

        if (err.response && err.response.status === 401) {
            console.log("hi");
            if (refreshToken) {
                // access token이 만료되었고 refresh token이 있는 경우
                console.log(refreshToken);
                try {
                    // 새로운 access token을 받아온 뒤 저장
                    const res = await axios.get(`${BASE_URL}/token`, {
                        headers: {
                            Authorization: `Bearer ${refreshToken}`,
                        },
                    });
                    console.log(res.data);
                    const newAccessToken = res.data.accessToken;
                    setAccessToken(newAccessToken);

                    // 이전 요청을 재시도
                    return axiosInstance(originalRequest);
                } catch (err) {
                    // refresh token이 유효하지 않은 경우
                    // 로그아웃
                    alert(
                        "보안을 위해 사용자 정보가 만료되었습니다. 다시 로그인해 주세요."
                    );
                    localStorage.clear();
                    window.location.href = "/login";
                }
            } else {
                //access token, refresh token이 없는 경우 (로그인되지 않은 상태에서의 접근)
                // 로그아웃
                alert("로그인이 필요한 페이지입니다.");
                localStorage.clear();
                window.location.href = "/login";
            }
        }

        return Promise.reject(err);
    }
);
