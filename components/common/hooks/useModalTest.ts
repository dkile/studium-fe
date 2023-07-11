import { useDispatch } from "react-redux";
import { showModal } from "@/modules/modal";

const useModalTest = () => {
  const dispatch = useDispatch();
  const type = "login";

  const clickBtn = () => {
    dispatch(showModal(type));
  };

  return { clickBtn };
};

export default useModalTest;
