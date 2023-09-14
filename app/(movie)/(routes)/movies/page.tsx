import getMovies from "@/actions/get-movies";
import FavoritePage from "@/components/favorite";
import Loader from "@/components/loader";
import MovieCard from "@/components/movie-card";
import MovieList from "@/components/movie-list";
import NoResults from "@/components/no-result";
import useFavorite from "@/hooks/use-favorite";
import { useLoading } from "@/hooks/use-loading";
import React from "react";

const MoviePage = async () => {

    const { isLoading, setLoading } = useLoading();

    const allMovies = await getMovies();


    return (
        <div className="flex flex-col mt-16 items-center md:mt-16">

            <p className=" text-2xl font-bold text-black px-2" >Favorite Movie</p>
            {
                isLoading ? (<Loader />) : (<FavoritePage />)
            }


            <p className=" text-2xl font-bold text-black px-2" >Featured Movie</p>
            {
                isLoading ? (<Loader />) : (<MovieList data={allMovies.results} />)
            }


        </div>
    );
};

export default MoviePage;
