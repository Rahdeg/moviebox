import { requests } from "@/lib/utils";
import { MovieResponse } from "@/typings";



const URL = requests.fetchMovies;

const getMovies = async (): Promise<MovieResponse> => {
    const res = await fetch(URL, { next: { revalidate: 0 } });
    return res.json();

}

export default getMovies;