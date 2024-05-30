import { IPostCodeFormData } from "./interfaces";
import { PostalCodeForm } from "./postal-code-form";
import { PostalCodeOutput } from "./postal-code-output";
import { usePostalCode } from "@/hooks/use-postal-code";
import { useCountryList } from "@/hooks/use-country-list";

export const PostalCode = () => {
  const { getPostCode, postCodeData, isPostCodeError, isPostCodeLoading } =
    usePostalCode();

  const { countries, isCountriesLoading } = useCountryList();

  const handleGetPostCode = (data: IPostCodeFormData) => {
    getPostCode(data);
  };

  return (
    <div className="md:flex md:flex-row md:gap-10">
      <PostalCodeForm
        countries={countries}
        getPostCode={handleGetPostCode}
        isCountriesLoading={isCountriesLoading}
        isPostCodeLoading={isPostCodeLoading}
      />
      <PostalCodeOutput
        postCodeData={postCodeData}
        isPostCodeError={isPostCodeError}
        isPostCodeLoading={isPostCodeLoading}
      />
    </div>
  );
};
