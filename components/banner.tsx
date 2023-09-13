"use client"
import Image from "next/image"
import { Movie } from "../typings"
import { useState, useEffect } from 'react'
import { baseUrl } from "@/constant/movie"
import { Box, Film, Play, PlayCircle } from "lucide-react"
import { Button } from "./ui/button"



interface Props {
    allMovies: Movie[]
}
const Banner = ({ allMovies }: Props) => {
    const [movie, setMovie] = useState<Movie | null>(null);
    // const [showModel, setShowModal] = useRecoilState(modalState);
    // const [showmovie, setShowMovie] = useRecoilState(movieState);

    useEffect(() => {
        setMovie(allMovies[Math.floor(Math.random() * allMovies.length)])
    }, [allMovies])

    return (
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 ">
            <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
                <Image
                    src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} width={1800} height={950}
                    alt='img'
                />
            </div>
            <div className=" h-full ">
                <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold text-shadow-md">
                    {movie?.title || movie?.overview}
                </h1>
                <div className="flex gap-5 ">
                    <p className="flex items-center justify-center "><Image
                        src='/imbd.png'
                        alt='gg'
                        width={20}
                        height={20}
                        className=" "
                    /> <span className=" ml-3">90/100</span></p>
                    <p className="flex items-center justify-center "><Image
                        src='/pngitem.png'
                        alt='gg'
                        width={20}
                        height={20}
                        className=" "
                    /> <span className=" ml-3">90/100</span></p>
                </div>
                <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
                    {movie?.overview}
                </p>
                <div className="flex space-x-2">
                    <Button variant='redline' className=" w-56 mt-2" ><PlayCircle className=" w-4 h-4 text-white md:w-7 md:h-7 mr-4" />WATCH TRAILER
                    </Button>

                </div>
            </div>

        </div>
    )
}

export default Banner