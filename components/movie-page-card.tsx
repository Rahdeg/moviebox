"use client"

import ReactPlayer from "react-player";
import { Card, CardContent, } from "./ui/card";
import { Movie, MovieDetails } from "@/typings";
import { useState, useEffect } from "react"
import { Book, Dot, List, Menu, Star } from "lucide-react";
import { Button } from "./ui/button";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ActionTooltip } from "./action-tooltip";

interface MoviePageCardProps {
    movie: MovieDetails
    movies: Movie[]
}

const MoviePageCard = ({ movie, movies }: MoviePageCardProps) => {
    const [trailer, setTrailer] = useState("");

    const router = useRouter();

    useEffect(() => {
        if (movie?.videos) {
            const index = movie.videos.results.findIndex(
                (element: any) => element.type === "Trailer"
            );
            setTrailer(movie.videos?.results[index]?.key);
        }
    }, [movie]);


    function extractYear() {
        const date = new Date(movie.release_date);
        return date.getFullYear();
    }

    const day = extractYear();

    function minutesToHoursAndMinutes(minutes: any) {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;

        const formattedTime = `${hours}hr:${remainingMinutes}min`;
        return formattedTime;
    }

    const time = minutesToHoursAndMinutes(movie.runtime);



    return (
        <Card className="w-full mt-0 border-none shadow-none">
            <CardContent className=" flex flex-col ">
                <div className="mt-5 w-full h-96 items-center justify-center">
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${trailer}`}
                        width="100%"
                        height="100%"
                        playing

                    />
                </div>

                <div className=" flex items-center justify-between ">
                    <div className=" flex items-center py-2 ">
                        <p>{movie.title} <Dot className=" inline" /> <span>{day} <Dot className=" inline" /></span> <span>{movie.adult ? "PG-18" : "PG-13"} <Dot className=" inline" /></span> <span>{time}</span> </p>

                        <p className="ml-3 text-pink-600">{movie.genres[0].name} <span className=" ml-2"> {movie.genres[1].name}</span></p>
                    </div>
                    <div className="flex items-center justify-center ml-auto"> <Star className="h-4 w-4 mr-2 text-yellow-600 fill-yellow-500" />{movie.vote_average} <span className=" border-l-2 border-zinc-600 px-1"> 350K</span>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <p className=" text-xs mr-4 pr-4 w-1/2">{movie.overview} </p>
                    <div className="ml-auto flex flex-col items-center gap-3 justify-center w-2/4">
                        <ActionTooltip side="top" align="center" label={time}>
                            <Button className=" text-center w-full bg-pink-600 "><Book className=" w-4 h-4 mr-2" /> See Showtimes </Button>
                        </ActionTooltip>

                        <Button onClick={() => router.push('/')} className=" text-center w-full bg-gray-300 text-black "><List className=" w-4 h-4 mr-2 " /> Watch More </Button>
                    </div>
                </div>
                <div className="flex  justify-center md:justify-between flex-col lg:flex-row w-full mt-4 ">
                    <div className=" flex flex-col text-start  w-full">
                        <div className=" flex flex-col gap-4">
                            <p>Director: <span className=" text-red-500">{movie.belongs_to_collection?.name} </span></p>
                            <p>Writers: <span className=" text-red-500">{movie.production_companies[0]?.name}</span></p>
                            <p>Stars: <span className=" text-red-500">{movie.production_countries[0]?.name}</span></p>
                        </div>

                        <div className="flex items-center justify-center flex-col lg:flex-row w-full mt-20 p-2">
                            <div className=" border border-gray-700 w-full h-10 rounded-md">
                                <Button className="ml-0 rounded-md bg-pink-600">Top rated movie #65</Button>
                                <span className="ml-3">Award 9 nominations </span>
                            </div>

                        </div>
                    </div>
                    {
                        movies && movies.filter((data, idx) => idx < 3).map((mmovie) => (
                            <div key={mmovie.id} className=" flex flex-col md:flex-row items-center justify-center  ">

                                <div className=" mt-3 flex ">
                                    <div className="w-[150px] h-[229px] relative">
                                        <Image alt="iii" fill className="w-[360px] h-[229px] left-0 top-0 absolute rounded-[10px]" src={`https://image.tmdb.org/t/p/w500${mmovie.poster_path}`} />
                                    </div>
                                </div>


                            </div>
                        ))
                    }




                </div>
            </CardContent>
        </Card>

    );
};

export default MoviePageCard;


{/* <Image alt="iiei" fill className="w-[23px] h-[23px] left-[16px] top-[198px] absolute shadow" src={`https://image.tmdb.org/t/p/w500${imagePath2}`} />
                             */}