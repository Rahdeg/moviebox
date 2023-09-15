import getMovies from "@/actions/get-movies";
import FavoritePage from "@/components/favorite";
import MoviesList from "@/components/movies-list";
import React from "react";

const MoviePage = async () => {

    const allMovies = await getMovies();

    return (
        <div className="flex flex-col mt-16 items-center md:mt-16">

            <p className=" text-2xl font-bold text-black px-2" >Favorite Movie</p>
            <FavoritePage />

            <p className=" text-2xl font-bold text-black px-2" >Featured Movie</p>
            <MoviesList data={allMovies.results} />

        </div>
    );
};

export default MoviePage;

