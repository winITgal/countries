import { Country, SearchBarProps } from '@/interfaces';
import React, { useState, useEffect, useRef } from 'react';
import { PiMagnifyingGlassLight } from 'react-icons/pi';
import { useRouter } from 'next/navigation';

const SearchBar: React.FC<SearchBarProps> = ({ countries }) => {
    const [searchedCountry, setSearchedCountry] = useState<Country | undefined>(undefined);
    const [searchQuery, setSearchQuery] = useState("");
    const [hasSearched, setHasSearched] = useState(false);
    const [showNoResults, setShowNoResults] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    useEffect(() => {
        if (searchQuery === '') {
            setShowNoResults(false);
        }
    }, [searchQuery]);

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setHasSearched(true);

        const result = countries.find(country =>
            country.internationalName?.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (result) {
            setSearchedCountry(result);
            router.push(`/countries/${result.id}`);
            setShowNoResults(false);
        } else {
            setSearchedCountry(undefined);
            setShowNoResults(true);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setShowNoResults(false);
    };

    return (
        <div className='shadow-xl rounded-md md:rounded-xl w-full md:w-2/3 lg:w-1/3 bg-white dark:bg-[#2B3844] p-5'>
            <form className='flex items-center w-full gap-2' onSubmit={handleOnSubmit}>
                <PiMagnifyingGlassLight size={30} color='#848484' />
                <input
                    className='outline-none bg-transparent text-xs md:text-sm dark:text-white w-full'
                    type="text"
                    placeholder={"Search for a country ..."}
                    value={searchQuery}
                    onChange={handleInputChange}
                    required
                    ref={inputRef}
                />
                <div className='flex items-center gap-2 md:gap-3'>
                    {hasSearched && showNoResults &&
                        <span className='text-[#F74646] text-[10px] md:text-sm font-bold whitespace-nowrap'>
                            No results
                        </span>
                    }
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
