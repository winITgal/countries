import { FilterDropdownProps } from '@/interfaces';
import React, { useState, useEffect, useRef } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

const FilterDropdown: React.FC<FilterDropdownProps> = ({ regions, countries, setCountries }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [selectedRegion, setSelectedRegion] = useState<string>('');

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleRegionSelect = (region: string) => {
        setSelectedRegion(region);
        const filteredCountries = countries.filter(country =>
            region === '' || country.region === region
        );
        setCountries(filteredCountries);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                id="dropdownButton"
                onClick={toggleDropdown}
                className="shadow-lg w-60 bg-white dark:bg-[#2B3844] dark:text-white rounded-md text-black focus:outline-none font-medium text-sm px-6 py-5 text-center flex justify-between items-center my-2"
                type="button"
            >
                {selectedRegion || 'Filter by Region'}
                <RiArrowDropDownLine size={25} />
            </button>
            {isOpen && (
                <div
                    id="dropdownMenu"
                    className="absolute z-10 w-60 bg-white divide-y divide-gray-100 text-black rounded-md shadow-lg"
                    style={{ top: '100%', left: 0 }}
                >
                    <ul
                        className="p-5 space-y-5 text-sm text-gray-700 dark:bg-[#2B3844] dark:text-white"
                        aria-labelledby="dropdownButton"
                    >
                        <li onClick={() => handleRegionSelect('')}>
                            <span className="block cursor-pointer">All Regions</span>
                        </li>
                        {regions?.map((region, index) => (
                            <li key={index} onClick={() => handleRegionSelect(region)}>
                                <span className="block cursor-pointer">{region}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>

    );
};

export default FilterDropdown;