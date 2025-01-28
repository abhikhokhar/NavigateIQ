import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List/List";
import Header from "./components/Header/Header";
import { getplacesdata } from "./components/api";
import Map from "./components/Map/Map";

function App() {
    const [places, setPlaces] = useState([]);
    const [type, setType] = useState("restaurants");
    const [coordinates, setCoordinates] = useState({ lat: 40.7128, lng: -74.006 });
    const [bounds, setBounds] = useState(null);
    const [loading, setLoading] = useState(false);
    const [rating, setRating] = useState("");
    const [filteredPlaces, setFilteredPlaces] = useState([]);

    useEffect(()=>{
        const filteredPlaces = places.filter((place) => place.rating > rating);
        setFilteredPlaces(filteredPlaces);
    },[rating])

    useEffect(() => {
        if (!bounds?.sw || !bounds?.ne) return;

        const fetchPlaces = async () => {
            setLoading(true);
            try {
                const data = await getplacesdata(type, bounds.sw, bounds.ne);
                setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
                setFilteredPlaces([]);
            } catch (error) {
                console.error("Error fetching places:", error);
            }
            setLoading(false);
        };

        fetchPlaces();
    }, [bounds, coordinates, type]);



    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                setCoordinates({ lat: latitude, lng: longitude });
            },
            (error) => {
                console.error("Error fetching location:", error);
            }
        );
    }, []);

    return (
        <>
            <Header setCoordinates={setCoordinates} />
            <div className="flex flex-col sm:flex-row w-screen h-screen">
                <List
                    places={filteredPlaces.length ? filteredPlaces : places}
                    loading={loading}
                    type={type}
                    setType={setType}
                    rating={rating}
                    setRating={setRating}
                />
                <Map
                    places={places}
                    setCoordinates={setCoordinates}
                    setBounds={setBounds}
                    coordinates={coordinates}
                />
            </div>
        </>
    );
}

export default App;
