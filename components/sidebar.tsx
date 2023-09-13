"use client"

import { cn } from "@/lib/utils"
import { usePathname } from 'next/navigation'
import { LayoutDashboard, MessageSquare, ImageIcon, VideoIcon, Music, Code, Settings, HomeIcon, FilmIcon, Tv, Calendar, LogOut } from "lucide-react"
import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import PlayingCard from "./playing-card"


const montserrat = Montserrat({
    weight: "600",
    subsets: ["latin"]
})

const routes = [
    {
        label: "Home",
        icon: HomeIcon,
        href: "/",
        color: "text-gray-400",

    },
    {
        label: "Movies",
        icon: FilmIcon,
        href: "/movies/3",
        color: "text-gray-400"
    },
    {
        label: "TV Series",
        icon: Tv,
        href: "/",
        color: "text-gray-400"
    },
    {
        label: "Upcoming",
        icon: Calendar,
        href: "/",
        color: "text-gray-400"
    },

]



const Sidebar = () => {
    const pathname = usePathname()

    return (
        <div className=" space-y-4 py-4 flex flex-col  rounded- text-white w-[226px] h-full bg-white rounded-tr-[45px] rounded-br-[45px] border border-black border-opacity-30">
            <div className=" py-2 flex-1">
                <Link href='/' className=" flex items-center pl-3  py-2">
                    <div className="relative w-8 h-8 mr-4">
                        <Image src='/tv.png' alt="logo" fill />
                    </div>
                    <h1 className={cn(" text-2xl text-black font-bold", montserrat.className)}>MovieBox</h1>
                </Link>
                <div className=" space-y-4  ">
                    {
                        routes.map((route) => (
                            <Link href={route.href} key={route.href} className={cn("text-sm group flex p-3 w-full font-medium cursor-pointer hover:text-red hover:bg-red-100 hover:border-r-4 hover:border-red-700 transition", pathname === route.href ? " text-red bg-red-200 border-r-4 border-red-700" : " text-zinc-400")}>
                                <div className="flex items-center justify-start ml-10 flex-1 ">
                                    <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                    {route.label}
                                </div>
                            </Link>
                        ))
                    }
                </div>
                <div className=" px-3 mt-2 lg:mt-14">
                    <PlayingCard />
                </div>


            </div>
            <Button className=" flex items-center justify-center text-gray-400" variant="ghost">
                <LogOut className="w-4 h-4 mr-4" /> Log out
            </Button>

        </div>
    )
}

export default Sidebar