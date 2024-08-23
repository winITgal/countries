import { CountryListCardProps } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CountryListCard: React.FC<CountryListCardProps> = ({ country }) => {
    return (
        <Link href={`/countries/${country?.id}`}>
            <div className='m-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-[#2B3844] shadow-xl'>
                <div className='relative w-full h-40 md:h-52 lg:h-60'>
                    <Image
                        src={country?.flag!}
                        alt={`${country?.internationalName} Flag`}
                        className='object-cover'
                        layout='fill'
                        priority={true}
                    />
                </div>
                <div className='p-4'>
                <h2 className='whitespace-nowrap overflow-hidden md:text-lg lg:text-xl text-ellipsis font-bold mb-3'>{country?.internationalName}</h2>
                    <div className='space-y-2'>
                        <div>
                            <span className='font-semibold'>Population: </span>
                            {
                                country?.population !== null && country?.population !== undefined && country?.population !== ''
                                    ? parseInt(country?.population as string, 10).toLocaleString()
                                    : 'N/A'
                            }
                        </div>
                        <div>
                            <span className='font-semibold'>Region: </span> {country?.region}
                        </div>
                        <div>
                            <span className='font-semibold'>Capital: </span> {country?.capital}
                        </div>
                    </div>
                </div>
            </div>
        </Link >
    );
};

export default CountryListCard;
