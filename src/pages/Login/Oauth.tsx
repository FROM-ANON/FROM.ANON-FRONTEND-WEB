import { loginAndGetTokensApi } from "network/apis/loginApis";
import { useEffect } from "react";

export const Oauth = () => {
    //code를 받아온다.
    const code: string | null = new URL(window.location.href).searchParams.get(
        "code"
    );

    //code를 백엔드로 보내고 jwt token을 받아온다.
    //백엔드에게 인가코드를 전달하여 jwt 토큰값을 가져온다.
    useEffect(() => {
        if (code !== null) {
            loginAndGetTokensApi(code);
        }
    }, []);

    return <></>;
};
