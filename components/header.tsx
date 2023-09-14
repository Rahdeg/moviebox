"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import SearchInput from './search-input'



const Header = () => {
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
        <header className={cn("text-white  md:px-10 fixed top-0 z-50 flex w-full items-center justify-between px-4 py-1 transition-all lg:px-10 lg:py-1", isScrolled && 'bg-[#141414]')}>
            <div className=" justify-start items-center gap-6 inline-flex">
                <Image
                    alt='logo'
                    width={50}
                    height={50}
                    className="" src="/tv.png"
                />
                <div className="text-white hidden md:block text-2xl font-bold leading-normal">MovieBox</div>
            </div>

            <SearchInput />

            <div className=" h-9 justify-start items-center gap-2 inline-flex">
                <div className="text-white text-base font-bold hidden md:flex leading-normal">Sign in</div>
                <div className="w-9 h-9 relative">
                    <div className="w-9 h-9 left-0 top-0 absolute bg-rose-700 rounded-full" />
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 left-[6px] top-[6px] absolute'>
                        <g id="Menu alt 4">
                            <g id="Icon">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.59998 8.40001C3.59998 7.73727 4.13723 7.20001 4.79998 7.20001H19.2C19.8627 7.20001 20.4 7.73727 20.4 8.40001C20.4 9.06275 19.8627 9.60001 19.2 9.60001H4.79998C4.13723 9.60001 3.59998 9.06275 3.59998 8.40001Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.59998 15.6C3.59998 14.9373 4.13723 14.4 4.79998 14.4H19.2C19.8627 14.4 20.4 14.9373 20.4 15.6C20.4 16.2628 19.8627 16.8 19.2 16.8H4.79998C4.13723 16.8 3.59998 16.2628 3.59998 15.6Z" fill="white" />
                            </g>
                        </g>
                    </svg>


                </div>
            </div>

        </header>
    )
}

export default Header