'use client'
import React, { useState } from 'react'
import BookCard from './BookCard';
import { Button } from './ui/button';
import { MovingCards } from './MovingCard';



const books = [
    {
        book: '/book/bookFull.jpg',
        thumbnail: "/collection-background.svg"

    },
    {
        book: '/book/bookimg01.png',
        thumbnail: "/collection-background.svg"
    },
    {
        book: '/book/bookimg02.png',
        thumbnail: "/collection-background.svg"
    },
];
const BookInfo = () => {
    const [book, setBookImg] = useState('/book/bookFull.jpg')
    return (
        <div className='flex flex-col'>
 <sction
            className='w-full bg-white border-2 border-red-500 p-2 flex xl:flex-row flex-col justify-center min-h-screen gap-10 w: [1440px] mt-0 mb-[auto] '
        >
            <div
                className='relative xl:w-2/5  flex flex-col justify-center items-start w-full max-xl:sm:px-16 px-8 pt-28 '
            >
                <p className='h-[50px] text-white  font-bold rounded-lg w-[200px] flex items-center justify-center bg-rose-600'>Here, You can buy</p>
                <h1 className='mt-10 text-8xl max:sm:text-[72px]
                   max-sm:text-[72px] max-sm:leading-[82] font-bold  
                '
                >Madhuri A Poem</h1>

                <p className='text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm '>
                    A Soul Stirring True Story of Love God And <br />
                    Reincarnation In Mordern Day Contemporary Times
                </p>
                <div className='flex gap-4'>
                <Button variant='default' size='lg' className='mt-10'>
                    Buy now
                </Button>
                 
                <Button variant='destructive' size='lg' className='mt-10'>
                    Cart
                </Button>
                </div>
                
                
            </div>
            <div
                style={{
                    background: 'url(/collection-background.svg)'
                }}
                className='relative flex-1 flex justify-center   ml:min-h-screen max-xl:py-40 bg-white '
            >
                <img
                    src={book}

                    className='object-contain relative z-10 mb-10 h-[500px]'
                />
                <div className='flex sm:gap-6 gap-4 absolute bottom-[1%] sm:left-[10%] max-sm:px-6'>
                    {books.map((book) => (
                        <div key={book}>
                            <BookCard
                                imgUrl={book}
                                changeBookImage={(book) => { setBookImg(book) }}
                                bookImg={book}
                            />
                        </div>
                    ))}
                </div>

            </div> 
             
        </sction>
        <div>
            <MovingCards /> 
        </div>
        </div>
       
    )
}

export default BookInfo