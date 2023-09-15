"use client"
import React from "react";
import MovieCard from "./movie-card";
import useFavorite from "@/hooks/use-favorite";
import NoResults from "./no-result";
import { useLoadingStore } from "@/hooks/use-loading";
import Loader from "./loader";

const FavoritePage = () => {
    const { items } = useFavorite();
    const { isLoading } = useLoadingStore();
    return (
        isLoading ? (<Loader />) : (
            <div className=" flex items-center justify-center ">
                {
                    items.length && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:w-full xl:ml-6">
                            {
                                items.map((item) => (
                                    <MovieCard movie={item} key={item.id} />
                                ))
                            }
                        </div>
                    )
                }
                {
                    items.length === 0 && <NoResults />
                }

            </div>
        )
    );
};

export default FavoritePage;
