interface IPlaces {
  "place name": string;
  longitude: string;
  state: string;
  "state abbreviation": string;
  latitude: string;
}

export interface IPostCodeData {
  "post code": string;
  country: string;
  "country abbreviation": string;
  places: IPlaces[];
}

export interface ICountryData {
  cca2: string;
  flag: string;
  name: {
    common: string;
    official: string;
  };
  postalCode?: { format: string; regex: string };
}

export interface IPostCodeFormData {
  country: string;
  postCode: string;
}
