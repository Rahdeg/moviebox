"use client"
import useMovieStore from "@/hooks/use-movie-store";
import MovieList from "./movie-list";
import { Movie } from "@/typings";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react"
import { useRouter } from "next/navigation";


interface FeaturedMovieProps {
    allMovies: Movie[]
}

const FeaturedMovie = ({ allMovies }: FeaturedMovieProps) => {

    const router = useRouter();


    const updateMovie = useMovieStore((state) => state.updateMovies);

    useEffect(() => {
        return updateMovie(allMovies);

    }, [allMovies, updateMovie]);



    return (
        <div className="flex flex-col bg-white   ">
            <div className=" justify-between items-center flex text-black p-5 mt-4">
                <p className=" text-2xl font-bold" >Featured Movie</p>
                <p onClick={() => router.push('/movies')} className="flex items-center justify-center pr-12 text-red-700 cursor-pointer">view more <ArrowRight className="w-4 h-4 ml-2" /></p>
            </div>
            <MovieList data={allMovies} />
        </div>
    );
};

export default FeaturedMovie;
