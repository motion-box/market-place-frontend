import NiceModal from "@ebay/nice-modal-react";
import { useAppDispatch, useAppSelector } from "../redux/store";

const ModalsProvider: React.FC<any> = ({ children }) => {
  const modals = useAppSelector((state) => state.modals);
  const dispatch = useAppDispatch();

  return (
    <NiceModal.Provider modals={modals} dispatch={dispatch}>
      {children}
    </NiceModal.Provider>
  );
};

export default ModalsProvider;
