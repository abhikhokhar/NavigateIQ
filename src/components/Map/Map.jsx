import React, { useEffect, useRef } from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Rating, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

function Map({ setCoordinates, setBounds, coordinates, places }) {
  const validPlaces = places?.filter((place) => {
    const latitude = parseFloat(place.latitude);
    const longitude = parseFloat(place.longitude);
    return (
      !isNaN(latitude) &&
      !isNaN(longitude) &&
      latitude >= -90 &&
      latitude <= 90 &&
      longitude >= -180 &&
      longitude <= 180
    );
  });

  // Prevent infinite loop by tracking updates
  const hasSetCoordinates = useRef(false);

  useEffect(() => {
    if (!hasSetCoordinates.current && validPlaces.length > 0) {
      const firstPlace = validPlaces[0];
      setCoordinates({
        lat: parseFloat(firstPlace.latitude),
        lng: parseFloat(firstPlace.longitude),
      });
      hasSetCoordinates.current = true; // Prevent further updates
    }
  }, [validPlaces, setCoordinates]);

  return (
    <div className="w-full sm:w-2/3 h-1/2 sm:h-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY }}
        center={coordinates}
        zoom={14}
        margin={[50, 50, 50, 50]}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      >
        {/* Render markers for valid places */}
        {validPlaces?.map((place, i) => (
          <div
            key={i}
            lat={place.latitude}
            lng={place.longitude}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
          >
            {/* Large Screen: Card with Image and Name */}
            <div className="hidden sm:block">
              <Paper
                elevation={6}
                className="p-2 rounded-lg shadow-lg bg-white border border-gray-200 w-48 text-center transition-transform transform hover:scale-105"
              >
                <img
                  src={place.photo?.images?.medium?.url || "restaurant.jpg"}
                  alt={place.name || "Unnamed Place"}
                  className="w-full h-24 object-cover rounded-md mb-2"
                />
                <Typography variant="subtitle2" className="text-gray-800 font-bold">
                  {place.name || "Unnamed Place"}
                </Typography>
                <Rating value={Number(place.rating)} readOnly />
              </Paper>
            </div>

            {/* Mobile Screen: Icon with Name */}
            <div className="sm:hidden flex items-center space-x-2 bg-white px-2 py-1 rounded-lg shadow-md border border-gray-300">
              <LocationOnOutlinedIcon className="text-red-500" fontSize="large" />
              <Typography variant="subtitle2" className="text-gray-900 font-semibold">
                {place.name || "Unnamed"}
              </Typography>
            </div>
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
