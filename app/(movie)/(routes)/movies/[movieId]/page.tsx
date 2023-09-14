import getAMovie from "@/actions/get-a-movie";
import getMovies from "@/actions/get-movies";
import MobileSidebar from "@/components/mobile-sidebar";
import MoviePageCard from "@/components/movie-page-card";
import React from "react";

const MoviePage = async ({ params }: { params: { movieId: string } }) => {

    const movie = await getAMovie(params.movieId);
    const allMovies = await getMovies();

    return (
        <div className=" text-black">
            <MoviePageCard movie={movie} movies={allMovies.results} />
        </div>
    );
};

export default MoviePage;
