import JoinCompleteModal from "@/components/modal/JoinCompleteModal";
import JoinModal from "@/components/modal/JoinModal";
import LoginModal from "@/components/modal/LoginModal";

function GlobalModal() {
  return (
    <>
      <LoginModal />
      <JoinCompleteModal />
      <JoinModal />
    </>
  );
}

export default GlobalModal;
