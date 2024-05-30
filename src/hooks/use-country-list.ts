import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { ICountryData } from "@/interfaces";

const supportedCountriesCodes = ["LI", "FR", "LU", "CH", "DE", "BE", "MC"];

export const useCountryList = () => {
  const { data: countries = [], isLoading: isCountriesLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: async (): Promise<ICountryData[]> => {
      const response = await axios.get(
        "https://restcountries.com/v3.1/subregion/Western Europe?fields=name,postalCode,cca2,flag"
      );

      return response.data;
    },
  });

  return {
    countries: countries?.filter((country) =>
      supportedCountriesCodes.includes(country.cca2)
    ),
    isCountriesLoading,
  };
};
