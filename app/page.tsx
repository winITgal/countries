'use client'
import { CountryListCard, FilterDropdown, SearchBar } from '@/components'
import { Country } from '@/interfaces';
import React, { useState } from 'react'
import countriesData from "@/public/countries.json"

const Home = () => {
  const [countries, setCountries] = useState<Country[]>(countriesData);
  const regions = Array.from(
    new Set(countriesData.map(country => country.region).filter((region): region is string => region !== null && region !== undefined))
  ); 


  return (
    <>
      <div className='flex flex-col md:flex-row justify-between gap-4 md:items-center'>
        <SearchBar countries={countriesData} />
        <FilterDropdown regions={regions} countries={countries} setCountries={setCountries} />
      </div>
      <div className='flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-2 lg:grid lg:grid-cols-4 lg:gap-5'>
        {countries?.map((country, index) => <CountryListCard key={index} country={country} />)}
      </div>
    </>
  )
}

export default Home
