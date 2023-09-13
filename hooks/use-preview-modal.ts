import { Movie } from "@/typings";
import { create } from "zustand";

interface PreviewModalProps {
  isOpen: boolean;
  data?: Movie;
  onOpen: (data: Movie) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalProps>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: Movie) => set({ data: data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
