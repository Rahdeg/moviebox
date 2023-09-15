import { create } from "zustand";

interface ILoadingStore {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
}

export const useLoadingStore = create<ILoadingStore>((set) => ({
  isLoading: false,
  setLoading: (isLoading: boolean) => set((state) => ({ isLoading })),
}));
