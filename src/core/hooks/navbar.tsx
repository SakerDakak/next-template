import { create } from "zustand";

interface NavbarState {
  isOpenNav: boolean;
  setIsOpenNav: (isOpenNav: boolean) => void;
}

export const useNavberHook = create<NavbarState>()((set) => ({
  isOpenNav: false,
  setIsOpenNav: (isOpenNav: boolean) => set({ isOpenNav }),
}));