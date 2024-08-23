export interface Country {
    id: number;
    flag?: string | null;
    internationalName?: string | null;
    population?: string | null;
    region?: string | null;
    capital?: string | null;
    nativeName?: string | null;
    subRegion?: string | null;
    topLevelDomain?: string | null;
    currencies?: string[] | null;
    languages?: string[] | null;
    borderCountries?: string[] | [];
}

export interface SearchBarProps {
    countries: Country[];
}

export interface CountryListCardProps {
    country?: Country
}

export interface FilterDropdownProps {
    regions?: string[];
    countries: Country[];
    setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
}

export interface BorderCountryButtonProps {
    borderCountry?: string | undefined | null;
}