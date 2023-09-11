"use client"
import { Search } from 'lucide-react'
import React, { ChangeEventHandler, useCallback, useEffect, useState } from 'react'
import { Input } from './ui/input'
import { useDebounce } from '@/hooks/use-debounce'
import axios from "axios"
// import useStoreProducts from '@/hooks/use-products'


const SearchInput = () => {
  const [value, setValue] = useState("");
  const debounceValue = useDebounce<string>(value, 500)
  // const addProduct = useStoreProducts();


  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  }


  // const searchProduct = useCallback(async () => {
  //   const response = await axios.get(`https://dummyjson.com/products/search?q=${debounceValue}`);
  //   addProduct.addItem(response.data["products"]);
  //   return;
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [debounceValue])


  // useEffect(() => {
  //   searchProduct();

  // }, [searchProduct]);


  return (

    <div className=' relative w-1/3'>
      <Search className='absolute h-4 w-4 top-2 right-4 text-muted-foreground' />
      <Input
        onChange={onChange}
        value={value}
        placeholder='What do you want to search?...' className='pl-2 w-full h-8' />
    </div>


  )
}

export default SearchInput