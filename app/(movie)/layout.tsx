import MobileSidebar from "@/components/mobile-sidebar";
import MovieHeader from "@/components/movie-header";
import Sidebar from "@/components/sidebar";
import React from "react";

const MovieLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full relative">
            <div className=" flex ml-0 md:ml-60 ">

                <MovieHeader />
            </div>
            <div className="hidden h-full md:flex md:flex-col md:w-[226px] md:fixed md:inset-y-0  bg-white">

                <Sidebar />
            </div>
            <main className=" md:pl-60 md:pr-4">
                {children}
            </main>
        </div>
    )
};

export default MovieLayout;
