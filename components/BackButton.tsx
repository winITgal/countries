import Link from 'next/link'
import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'

const BackButton = () => {
    return (
        <Link href={"/"} className='flex w-fit items-center gap-2 bg-white p-3 mb-10 rounded-lg dark:bg-[#2B3844]'>
            <FaArrowLeftLong />
            <span className='block'>Back</span>
        </Link>
    )
}

export default BackButton
