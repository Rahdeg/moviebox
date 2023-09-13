import { Movie } from "@/typings";
import { create } from "zustand";

interface StoreMovieProps {
  movies: Movie[];
  updateMovies: (data: Movie[]) => void;
}

const useMovieStore = create<StoreMovieProps>((set: any) => ({
  movies: [],
  updateMovies: (data: Movie[]) => {
    set({ movies: data });
  },
}));

export default useMovieStore;
