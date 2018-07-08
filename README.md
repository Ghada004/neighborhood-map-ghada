# GHADA

# Neighborhood Map (React)
Locations: Riyadh
Markers: Pizza locations.
This project is React, Google Map, Foursquare and bootstrap 4 powered single page application.


## React Component
In order to make this project work, several components were created
1. `SearchList.js` this is for filter search resualts, and handle user click search result.
2. `MapView.js` this is google map component, It's main functionality is for handle user click
and show search results
3. `FourSquareAPI.js` this is not a component, but it handle data from foursquare server.

## Service Worker
The `service worker` bundled with this app only woks in `production mode`, so in order to make
code production you need to run commond:
 `yarn run build`, the build is minified and the filenames include the hashes.
The app production code will be in `build` folder. Then app is ready to be deployed.


## How to run this project
1. Open the terminal
2. `cd` Into the app directory
3. type  `yarn install` to install app dependences,
4. typeor `yarn star`, to run app with develop mode,
   then you can type "http://localhost:3000" in your browser to use the app.
5. The service worker is implemented only in the production build.
6. enjoy!
