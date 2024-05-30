# Postal Code Data

To set up app locally please run the following commands:

- npm install
- npm run dev

Local server on `3003` port will start.

# Details

This project is built with React + TS + Vite boilerplate. For styling I've used Tailwind CSS and DaisyUI library.

Data-fetching and state management is carried out by react-query library.

API used for this app is https://api.zippopotam.us/. It doesn't support all the countries and a long list to choose from may seem overwhelming, hence I'm displaying only Central European countries ([API](https://restcountries.com/) ) in the select field (minus the Netherlands not supported by Zippopotam).

This project uses Google Maps. In order to see the map, generate your Google Maps key and add it to the `.env` file.
