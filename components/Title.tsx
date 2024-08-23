import React from 'react'
import ThemeToggler from './ThemeToggler'
import Link from 'next/link'

const Title = () => {
    return (
        <div className='flex justify-between py-5 px-10 bg-white shadow-md dark:bg-[#2B3844]'>
            <Link href={"/"}><h1 className='font-bold md:text-2xl'>Where in the world?</h1></Link>
            <ThemeToggler />
        </div>
    )
}

export default Title
