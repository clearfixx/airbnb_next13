import { create } from "zustand";
import { IModalRegisterAndLoginProps } from "../interfaces/modalsHooksProps";

const useRentModal = create<IModalRegisterAndLoginProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useRentModal;
