import { Map } from "@vis.gl/react-google-maps";
import { IPostCodeData } from "@/components/postal-code/interfaces";

interface IPostalCodeOutputProps {
  postCodeData: IPostCodeData;
  isPostCodeError: boolean;
  isPostCodeLoading: boolean;
}

export const PostalCodeOutput = ({
  postCodeData,
  isPostCodeError,
  isPostCodeLoading,
}: IPostalCodeOutputProps) => {
  if (isPostCodeLoading) {
    return (
      <div className="bg-white rounded-lg p-4 md:flex-1 flex w-full items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (!postCodeData && !isPostCodeError) {
    return (
      <div className="bg-white rounded-lg p-4 md:flex-1 flex w-full items-center justify-center max-w-[100vw]">
        <p className="text-gray-400">
          Please choose a country and enter a postcode to see results.
        </p>
      </div>
    );
  }

  if (isPostCodeError) {
    return (
      <div className="bg-white rounded-lg p-4 md:flex-1 flex w-full items-center justify-center max-w-[100vw]">
        <p>Oops! We've encountered an error looking for this postcode. 😕</p>
      </div>
    );
  }
  console.log(postCodeData);
  const place = postCodeData.places[0];

  return (
    <div className="bg-white md:rounded-lg p-4 md:flex-1 w-full">
      <div className="mb-4">
        <dl className="grid grid-cols-2 gap-4">
          <div>
            <dt className="text-gray-400">Country:</dt>
            <dd>{postCodeData.country}</dd>
          </div>
          <div>
            <dt className="text-gray-400">State Abbreviation:</dt>
            <dd>{place["state abbreviation"]}</dd>
          </div>
          <div>
            <dt className="text-gray-400">Postal Code:</dt>
            <dd>{postCodeData["post code"]}</dd>
          </div>
          <div>
            <dt className="text-gray-400">Place:</dt>
            <dd>{place["place name"]}</dd>
          </div>
        </dl>
      </div>
      <Map
        style={{ height: "400px" }}
        defaultCenter={{
          lat: Number(place.latitude),
          lng: Number(place.longitude),
        }}
        defaultZoom={12}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />
    </div>
  );
};
