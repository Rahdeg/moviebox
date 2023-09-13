"use client"
import useMovieStore from "@/hooks/use-movie-store";
import { Movie } from "@/typings";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface MovieCardProps {
    movie: Movie
}

const MovieCard = ({ movie }: MovieCardProps) => {

    const router = useRouter();

    const handleClick = () => {
        router.push(`/movies/${movie.id}`);
    }



    return (
        <div className="w-[250px] h-[490px] flex-col justify-start items-start gap-3 flex py-4 group cursor-pointer" onClick={handleClick} >
            <div className="w-[250px] h-[370px] relative">
                <div className="w-[250px] h-[370px] left-0 top-0 absolute">
                    <div className="w-[250px] h-[370px] left-0 top-0 absolute bg-stone-300" />
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path
                            }`}
                        alt='gg'
                        fill
                        className="rounded-sm object-cover md:rounded left-0 top-0 absolute"
                    />

                </div>
                <div className="w-[218px] h-[29.21px] pl-[188px] left-[16px] top-[15.58px] absolute justify-end items-center inline-flex">
                    <div className="w-[30px] h-[29.21px] relative">
                        <div className="w-[30px] h-[29.21px] left-0 top-0 absolute bg-gray-100 bg-opacity-50 rounded-full backdrop-blur-[2px]" />
                        <div className="w-5 h-[19.47px] left-[5px] top-[4.87px] absolute" />
                    </div>
                </div>
            </div>
            <div className="text-gray-400 text-xs font-bold">{movie.release_date}</div>
            <div className="w-[250px] text-gray-900 text-lg font-bold">{movie.title}</div>
            <div className="w-[250px] justify-between items-start flex">
                <div className="justify-start items-center gap-2.5 flex">
                    <Image
                        src='/imbd.png'
                        alt='gg'
                        width={20}
                        height={20}
                        className=" "
                    />

                    <div className="text-gray-900 text-xs font-normal leading-3">82.0 / 100</div>
                </div>
                <div className="justify-start items-center gap-2.5 flex">
                    <Image
                        src='/pngitem.png'
                        alt='gg'
                        width={20}
                        height={20}
                        className=" "
                    />
                    <div className="text-gray-900 text-xs font-normal leading-3">70%</div>
                </div>
            </div>
            <div className="text-gray-400 text-xs font-bold">Action, Adventure</div>
        </div>
    );
};

export default MovieCard;