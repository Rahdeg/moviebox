import { MovieDetailsResponse } from "@/typings";



const getAMovie = async (movieId: string): Promise<MovieDetailsResponse> => {
    const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`

    const res = await fetch(URL, { next: { revalidate: 0 } });
    return res.json();

}

export default getAMovie;