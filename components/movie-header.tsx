"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import SearchInput from './search-input'
import MobileSidebar from './mobile-sidebar'
const MovieHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])


    return (
        <header className={cn("text-black  md:px-10 fixed top-0 border-b  z-50 flex w-full items-center justify-between px-4 py-1 transition-all lg:px-10 lg:py-1", isScrolled && 'bg-[#e2dada]')}>
            <MobileSidebar />
            <SearchInput />
            <div className=" justify-start items-center gap-6 inline-flex">
                <Image
                    alt='logo'
                    width={50}
                    height={50}
                    className="" src="/tv.png"
                />
                <div className="text-white hidden md:block text-2xl font-bold leading-normal">MovieBox</div>
            </div>
        </header>
    )
}

export default MovieHeader