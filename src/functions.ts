import axios from "axios";

export const handleError = (err: any) => {
    if (axios.isAxiosError(err)) {
        const status = err.response?.status;
        if (status !== undefined) {
            console.log(err.response?.status);

            switch (status) {
                case 500:
                    alert("알 수 없는 오류가 발생했습니다.");
                    break;
                case 403:
                    alert("권한이 없습니다.");
                    break;
                case 406:
                    return status;
                default:
                    alert("알 수 없는 오류가 발생했습니다.");
                    break;
            }
        }
    } else {
        console.log("Non-Axios error:", err);
    }
};
