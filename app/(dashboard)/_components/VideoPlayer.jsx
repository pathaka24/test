'use client'
import { HoverEffect } from '@/components/ui/card-hover-effect';
import React from 'react'

const VideoPlayere = () => {
  return (
    <div className='w-full  bg-[#060816]'>
        <h1>

        </h1>
        <HoverEffect items={projects} />
    </div>
  )
}

const projects = [
    
    {
        id: 1,
        title: 'Why Must It Be Read?',
        link: 'https://www.youtube.com/embed/_GV6PCHFGkI',
        photo: '/video/shiv.jpg'
    },
    {
        id: 2,
        title: 'First Teaser of Madhuri A Poem',
        link: 'https://www.youtube.com/embed/123yJdc0E5k',
        photo: '/video/bookLaunch.png'
    },
    {
        id: 3,
        title: 'Book Review Part 1',
        link: 'https://www.youtube.com/embed/AhgCKzJZZXk',
        photo: '/video/review.png'
    },
    {
        id: 4,
        title: 'Book Review Part 2',
        link: 'https://www.youtube.com/embed/kwUBFFzWfNI',
        photo: '/video/review.png'
    },
    {
        id: 5,
        title: 'Karma or Koincidence',
        link: 'https://www.youtube.com/embed/Wl-JDD9pKXI',
        photo: '/video/karma.png'

    },
    {
        id: 6,
        title: 'Guru Ji Ka Ashram Book Reading Part 1',
        link: 'https://www.youtube.com/embed/ctpD2E3BFlA',
        photo: '/video/guru01.jpg'
    },
    {
        id: 7,
        title: 'Guru Ji Ka Ashram Book Reading Part 2',
        link: 'https://www.youtube.com/embed/DamWsYKkuQA',
        photo: '/video/guru02.jpg'
    },
    {
        id: 8,
        title: 'Guru Ji Ka Ashram Book Reading Part 3',
        link: 'https://www.youtube.com/embed/mFYYMe1aY4k',
        photo: '/video/guru03.png'
    },
    {
        id: 9,
        title: 'Guru Ji Ka Ashram Book Reading Part 4',
        link: 'https://www.youtube.com/embed/MTVN9s13oN8',
        photo: '/video/guru04.png'
    },
    {
        id: 10,
        title: 'Guru Ji Ka Ashram Book Reading Part 5',
        link: 'https://www.youtube.com/embed/9m2CciHZumY',
        photo: '/video/guru05.png'
    }
]
  

export default VideoPlayere