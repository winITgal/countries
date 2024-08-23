'use client'
import { BackButton, BorderCountryButton } from '@/components';
import { useParams } from 'next/navigation'
import Image from 'next/image';
import React from 'react'
import countries from '@/public/countries.json'

const CountryDetailPage = () => {
    const params = useParams();
    const id = params.id as string;
    const country = countries.find(country => country.id === Number(id));

    return (
        <>
            <BackButton />
            <div className='flex flex-col lg:flex-row gap-10 bg-gray-100 dark:bg-[#202C36] p-4'>
                <div className='rounded-lg overflow-hidden relative aspect-video w-full lg:w-1/2'>
                    <Image
                        src={country?.flag!}
                        alt={`${country?.internationalName} Flag`}
                        className='object-cover'
                        layout='fill'
                        priority={true}
                    />
                </div>
                <div className='p-4 flex flex-col justify-between w-full'>
                    <h2 className='font-bold mb-3 text-xl md:text-2xl lg:text-5xl'>{country?.internationalName}</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='space-y-2'>
                            <div>
                                <span className='font-semibold'>Native Name: </span>
                                <span className='break-words'>{country?.nativeName}</span>
                            </div>
                            <div>
                                <span className='font-semibold'>Population: </span>
                                {country?.population !== null && country?.population !== undefined && country?.population !== ''
                                    ? parseInt(country?.population as string, 10).toLocaleString()
                                    : 'N/A'
                                }
                            </div>
                            <div>
                                <span className='font-semibold'>Region: </span>
                                <span className='break-words'>{country?.region}</span>
                            </div>
                            <div>
                                <span className='font-semibold'>Sub Region: </span>
                                <span className='break-words'>{country?.subRegion}</span>
                            </div>
                            <div>
                                <span className='font-semibold'>Capital: </span>
                                <span className='break-words'>{country?.capital}</span>
                            </div>
                        </div>

                        <div className='space-y-2'>
                            <div>
                                <span className='font-semibold'>Top Level Domain: </span>
                                <span className='break-words'>{country?.topLevelDomain}</span>
                            </div>
                            <div>
                                <span className='font-semibold'>Currencies: </span>
                                <span className='break-words'>{country?.currencies.join(', ')}</span>
                            </div>
                            <div>
                                <span className='font-semibold'>Languages: </span>
                                <span className='break-words'>{country?.languages.join(', ')}</span>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        {country?.borderCountries.length ? (
                            <div className='flex flex-col md:flex-row items-start md:items-center'>
                                <span className='font-semibold mr-2'>Border Countries: </span>
                                <div className='flex flex-wrap gap-2'>
                                    {country.borderCountries.map((borderCountry, index) => (
                                        <BorderCountryButton key={index} borderCountry={borderCountry} />
                                    ))}
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CountryDetailPage;
