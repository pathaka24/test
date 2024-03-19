'use client'
import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
 
import React from 'react'



const navitems = [
    {
        name:"Home",
        link:'/'
    },
    {
        name:"Poem",
        link:'/poem'
    },
    {
        name:"Book",
        link:'/book'
    },
    {
        name:"Guru ji",
        link:'/guruji'
    },
    {
        name:"Madhuri",
        link:"/madhuri"
    },
    {
        name:"Author",
        link:"/author"
    },
    {
        name:"Gallery",
        link:"/gallery"
    }
]

const Navitems = ({ params }) => {
    console.log("params: ",params);
    const router = useRouter()
    console.log(router);
  return (
    <div className='flex items-center w-full justify-around'>
         <div>
            <Link href='/'>
                <div className='relative h-[50px] w-[150px] p-2'>
                <Image src='/madhuriapoem.png' fill alt='madhuri a poem' className='w-full h-full object-cover object-center' />
                </div>
                
            </Link>
         </div>
        <div className='flex flex-row gap-8'>
        {navitems.map(( item ,index) => (
            <div key={item.name}  >
               <Link href={item.link}  className={ item.name === 'home' ? 'text-white font-semibold font-sans text-lg' :"text-gray-300 font-semibold font-sans text-lg"}>{item.name}</Link>

            </div>
         ))}
        </div>
     
    </div>
  );
};

export default Navitems