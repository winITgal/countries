'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { IoMdMoon, IoMdSunny } from "react-icons/io"


const ThemeToggler = () => {
    const { setTheme, resolvedTheme } = useTheme()
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => setHasMounted(true), []);

    if (!hasMounted) return null;

    return (
        <div className='hover:cursor-fancy-pointer'>
            {
                resolvedTheme === 'dark'
                    ?
                    <div className='cursor-pointer flex justify-between items-center gap-2 text-[#FFFFFF] hover:text-[#90A4D4]' onClick={() => setTheme('light')}>
                        <IoMdSunny size={20} />
                        <span className='text-sm'>Light Mode</span>
                    </div>
                    :
                    <div className='cursor-pointer flex justify-between items-center gap-2 text-[#697C9A] hover:text-[#222731]' onClick={() => setTheme('dark')}>
                        <IoMdMoon size={20} />
                        <span className='text-sm'>Dark Mode</span>
                    </div>
            }
        </div>
    )
}


export default ThemeToggler