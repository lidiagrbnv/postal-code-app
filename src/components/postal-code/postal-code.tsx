import { IPostCodeFormData } from "./interfaces";
import { PostalCodeForm } from "./postal-code-form";
import { PostalCodeOutput } from "./postal-code-output";
import { usePostalCode } from "./use-postal-code";

export const PostalCode = () => {
  const {
    getPostCode,
    postCodeData,
    countries,
    isCountriesLoading,
    isPostCodeError,
    isPostCodeLoading,
  } = usePostalCode();

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
