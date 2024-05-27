import { useState } from "react";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

import { IPostCodeFormData } from "@/components/postal-code/interfaces";

export const usePostalCode = () => {
  const [isPostCodeLoading, setIsPostCodeLoading] = useState(false);

  const {
    mutate: getPostCode,
    data: postCodeData,
    isError: isPostCodeError,
  } = useMutation({
    mutationFn: async ({ country, postCode }: IPostCodeFormData) => {
      setIsPostCodeLoading(true);
      const response = await axios.get(
        `http://api.zippopotam.us/${country}/${postCode}`
      );

      return response.data;
    },
    onSuccess: () => {
      setIsPostCodeLoading(false);
    },
    onSettled: () => {
      setIsPostCodeLoading(false);
    },
  });

  const { data: countries, isLoading: isCountriesLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const response = await axios.get(
        "https://restcountries.com/v3.1/region/europe?fields=name,postalCode,cca2,flag"
      );

      return response.data;
    },
  });

  return {
    getPostCode,
    postCodeData,
    countries,
    isCountriesLoading,
    isPostCodeError,
    isPostCodeLoading,
  };
};
