import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import { Movie } from '@/typings';

const contentStyle: React.CSSProperties = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

interface ImagerolProps {
    movies: Movie[]
}

const Imagerol = ({ movies }: ImagerolProps) => (
    <Carousel autoplay className=' '>

        {
            movies && movies.map((movie) => (
                <div className='' key={movie.id}>
                    <h3 style={contentStyle}>
                        <div className=' w-auto h-80 relative'>
                            <Image alt='ie' src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path
                                }`} fill />
                        </div>
                    </h3>
                </div>
            ))
        }
    </Carousel>
);

export default Imagerol;