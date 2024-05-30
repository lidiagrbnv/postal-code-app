import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  ICountryData,
  IPostCodeFormData,
} from "@/components/postal-code/interfaces";

interface IPostCodeFormProps {
  countries: ICountryData[];
  getPostCode: (data: IPostCodeFormData) => void;
  isCountriesLoading: boolean;
  isPostCodeLoading: boolean;
}
export const PostalCodeForm = ({
  countries = [],
  getPostCode,
  isCountriesLoading,
  isPostCodeLoading,
}: IPostCodeFormProps) => {
  const [selectedCountry, setSelectedCountry] = useState<ICountryData>();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IPostCodeFormData>({
    defaultValues: {
      country: "",
      postCode: "",
    },
  });

  const countryCode = watch("country");
  const postCode = watch("postCode");

  useEffect(() => {
    if (!countryCode) return;

    setSelectedCountry(() => countries.find((i) => i.cca2 === countryCode));
  }, [countryCode]);

  const onSubmit = async (data: IPostCodeFormData) => {
    await getPostCode(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white md:rounded-lg p-4 pt-2 w-full md:w-96"
    >
      <label className="mb-2 form-control w-full">
        <div className="label">
          <span className="label-text">Country</span>
        </div>
        <select
          className="select w-full select-bordered"
          disabled={isCountriesLoading}
          {...register("country")}
        >
          <option disabled value="">
            {isCountriesLoading ? "Loading countries..." : "Select a country"}
          </option>
          {countries?.map((country) => (
            <option value={country.cca2} key={country.cca2}>
              {country.name.common} {country.flag}
            </option>
          ))}
        </select>
      </label>
      <label className="mb-8 form-control w-full">
        <div className="label cursor-pointer">
          <span className="label-text">Postal code</span>
        </div>
        <input
          disabled={!selectedCountry}
          type="text"
          placeholder={selectedCountry?.postalCode?.format}
          className={`input input-bordered w-full ${
            errors.postCode?.message ? "input-error" : ""
          }`}
          {...register("postCode", {
            required: true,
            pattern: {
              value: new RegExp(selectedCountry?.postalCode?.regex || ""),
              message: "Invalid number of characters",
            },
          })}
        />
        <div className="label">
          <span className="label-text-alt">{errors.postCode?.message}</span>
        </div>
      </label>
      <button
        disabled={!(postCode && countryCode) || isPostCodeLoading}
        className="btn btn-primary w-full"
        type="submit"
      >
        Check postal code
      </button>
    </form>
  );
};
