import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { initModal } from "@/modules/modal";
// import { setAccessToken, setIsLogin } from "@/modules/auth";

export default function useLoginModal() {
  const onSuccess = async (response: any) => {
    console.log(response);
    const API_MEMBER = "https://api.server.d0lim.com/turnstile";
    const loginUrl = `${API_MEMBER}/api/v1/auth/login/google`;
    const data = { code: response.code };
    try {
      const tokens = await axios.post(loginUrl, data);
      const authorizationHeaderValue = tokens.headers.authorization;
      console.log(tokens);
      console.log(tokens.headers);
      console.log(authorizationHeaderValue);
      // setAccessToken(authorizationHeaderValue);
      // setIsLogin(true);
      initModal("login");
    } catch (e) {
      console.log(e);
      try {
        if ((e as any).response.data.error_code === "NEW_USER") {
          console.log("new user, show nickname form");
          // setAccessToken((e as any).response.data.token.access_token);
          // nextModal({ current: "login", next: "join" });
        }
      } catch (err) {
        //
      }
    }
  };
  const onError = () => {
    console.log("Login Failed");
  };

  const googleLogin = useGoogleLogin({ onSuccess, onError });

  const state = {};
  const handler = { googleLogin };

  return { ...state, ...handler };
}
