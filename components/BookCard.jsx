'use client'
import React from 'react'

const BookCard = ({ imgUrl, changeBookImage, bookImg }) => {
    const handleClick = () => {
        if (bookImg !== imgUrl.book) {
            changeBookImage(imgUrl.book)
        }
    }
    return (
        <div
            onClick={handleClick}
            className={`border-2 rounded-xl ${bookImg === imgUrl} ? 'border-red-400':'cursor-pointer max-sm:flex-1'`}>
            <div
                className='flex justify-center items-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4'
            >
                <img
                    width={100}
                    height={80}
                    className='object-contain'
                    src={imgUrl.book} />
            </div>
        </div>
    )
}

export default BookCard