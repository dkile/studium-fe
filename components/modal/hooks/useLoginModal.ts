import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { hideModal } from "@/modules/modal";
import { setAccessToken, setIsLogin } from "@/modules/auth";
import { useDispatch, batch } from "react-redux";
// import { setAccessToken, setIsLogin } from "@/modules/auth";

export default function useLoginModal() {
  const dispatch = useDispatch();
  const onError = () => {
    console.log("Login Failed");
    batch(() => {
      dispatch(setIsLogin(false));
      dispatch(hideModal("login"));
    });
  };
  const onSuccess = async (response: any) => {
    const API_MEMBER = "https://turnstile.server.d0lim.com";
    const loginUrl = `${API_MEMBER}/api/v1/auth/login/google`;
    try {
      const data = { code: response.code };
      const tokens = await axios.post(loginUrl, data);
      const accessToken = tokens.data.access_token;
      batch(() => {
        dispatch(setAccessToken(accessToken));
        dispatch(setIsLogin(true));
        dispatch(hideModal("login"));
      });
      window.localStorage.setItem("studium-token", accessToken);
    } catch (e) {
      console.log(e);
      try {
        if ((e as any).response.data.error_code === "NEW_USER") {
          console.log("new user, show nickname form");
          // setAccessToken((e as any).response.data.token.access_token);
          // nextModal({ current: "login", next: "join" });
        } else throw new Error();
      } catch (err) {
        onError();
      }
    }
  };

  const googleLogin = useGoogleLogin({ onSuccess, onError, flow: "auth-code" });

  const state = {};
  const handler = { googleLogin };

  return { ...state, ...handler };
}
