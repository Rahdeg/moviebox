"use client"
import { Search } from 'lucide-react'
import React, { ChangeEventHandler, useCallback, useEffect, useState } from 'react'
import { Input } from './ui/input'
import { useDebounce } from '@/hooks/use-debounce'
import axios from "axios"
import useMovieStore from '@/hooks/use-movie-store'
import toast from 'react-hot-toast'
import { useLoadingStore } from '@/hooks/use-loading'


const SearchInput = () => {
  const [value, setValue] = useState("");
  const debounceValue = useDebounce<string>(value, 500)
  const addmovies = useMovieStore((state) => state.updateMovies);


  const { setLoading } = useLoadingStore();



  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  }


  const searchProduct = useCallback(async () => {
    setLoading(true);
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: { query: debounceValue, include_adult: 'false', language: 'en-US', page: '1' },
      headers: {
        accept: 'application/json',
        Authorization: process.env.NEXT_PUBLIC_ACCESS_TOKEN
      }
    };

    axios
      .request(options)
      .then(function (response) {
        addmovies(response.data.results);
      })
      .catch(function (error) {
        toast.error(error.message || "Something went wrong");
      });
    setLoading(false);
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceValue])


  useEffect(() => {
    searchProduct();

  }, [searchProduct]);


  return (

    <div className=' relative w-1/3 bg-transparent '>
      <Search className='absolute h-4 w-4 top-2 right-4 text-muted-foreground' />
      <Input
        onChange={onChange}
        value={value}
        placeholder='Search...' className='pl-2 w-full h-8 bg-transparent' />
    </div>


  )
}

export default SearchInput