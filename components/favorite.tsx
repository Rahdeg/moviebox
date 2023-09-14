"use client"
import React from "react";
import MovieCard from "./movie-card";
import useFavorite from "@/hooks/use-favorite";
import NoResults from "./no-result";
import MovieList from "./movie-list";

const FavoritePage = () => {
    const { items } = useFavorite();
    return (
        <MovieList data={items} />
    );
};

export default FavoritePage;
