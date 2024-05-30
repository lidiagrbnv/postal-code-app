import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

import { IPostCodeFormData, IPostCodeData } from "@/interfaces";

export const usePostalCode = () => {
  const [isPostCodeLoading, setIsPostCodeLoading] = useState(false);

  const {
    mutate: getPostCode,
    data: postCodeData,
    isError: isPostCodeError,
  } = useMutation({
    mutationFn: async ({
      country,
      postCode,
    }: IPostCodeFormData): Promise<IPostCodeData> => {
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

  return {
    getPostCode,
    postCodeData,
    isPostCodeError,
    isPostCodeLoading,
  };
};
