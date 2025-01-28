import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { TextField, InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

function Header({ setCoordinates }) {
  const [autocomplete, setAutocomplete] = useState(null);
  const [searchText, setSearchText] = useState("");

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    if (!autocomplete) return;

    const place = autocomplete.getPlace();
    if (!place.geometry || !place.geometry.location) {
      console.error("No valid location found for the selected place.");
      return;
    }

    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();

    setCoordinates({ lat, lng });

    setSearchText(place.name || "");
  };

  return (
    <header className="flex flex-col sm:flex-row w-screen items-center justify-between px-6 py-2 bg-gray-100 border-b border-gray-300 top-0 left-0 z-50 sticky">
      <div className="text-3xl font-bold text-black">
        Navigate<span className="text-blue-600">IQ</span>
      </div>

      <div className="w-full max-w-md mt-2 sm:mt-0">
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <TextField
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for places, hotels, or restaurants..."
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ color: "#9E9E9E" }} />
                </InputAdornment>
              ),
            }}
            className="bg-white rounded-full shadow-md"
          />
        </Autocomplete>
      </div>
    </header>
  );
}

export default Header;
