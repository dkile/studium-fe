import useLoginModal from "./hooks/useLoginModal";
import Modal from "../common/Modal";

function LoginModal() {
  const { googleLogin } = useLoginModal();
  const loginDom = (
    <button type="button" onClick={() => googleLogin()}>
      Sign in with Google🚀
    </button>
  );
  return (
    <Modal type="login" showCancelBtn showPrevBtn={false} contents={loginDom} />
  );
}

export default LoginModal;
