import { BorderCountryButtonProps } from '@/interfaces'
import React from 'react'

const BorderCountryButton: React.FC<BorderCountryButtonProps> = ({ borderCountry }) => {
    return (
        <div className='outline-[#979797] p-2 m-2 shadow-xl rounded-md dark:bg-[#2B3844]'>{borderCountry}</div>
    )
}

export default BorderCountryButton
