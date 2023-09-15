"use client"
import { Movie } from "@/typings";
import { useEffect, useState } from "react";
import NoResults from "./no-result";
import MovieCard from "./movie-card";
import useMovieStore from "@/hooks/use-movie-store";
import useFavorite from "@/hooks/use-favorite";
import { useLoadingStore } from "@/hooks/use-loading";
import Loader from "./loader";


interface MovieListProps {
    data: Movie[]
}

const MoviesList = ({ data }: MovieListProps) => {

    const { isLoading } = useLoadingStore();

    const addmovies = useMovieStore((state) => state.updateMovies);

    useEffect(() => {
        return addmovies(data)
    }, [addmovies, data,]);

    const movie = useMovieStore((state) => state.movies);


    return (
        <div className=" flex items-center justify-center">

            {
                movie.length === 0 ? (

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:w-full xl:ml-6">
                        {
                            data.map((item) => (
                                <MovieCard movie={item} key={item.id} />
                            ))
                        }
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:w-full xl:ml-6">
                        {
                            movie.map((item) => (
                                <MovieCard movie={item} key={item.id} />
                            ))
                        }
                    </div>
                )
            }
            {
                movie.length === 0 || data.length === 0 && <NoResults />
            }

        </div>
    );
};

export default MoviesList;

