import { useState } from "react";
import { GetCityInfo, LocationSearch } from "../services/WeatherApp";
import "./App.css";
import CityResponse from "./CityResponse/CityResponse";
import Header from "./Header/Header";
import Search from "./Search/Search";

const App = () => {
  const [ApiResponse, setApiResponse] = useState([]);
  const [cityResponse, setCityResponse] = useState(null);
  const handleSearch = searchTerm => {
    LocationSearch(searchTerm).then(res => {
      setApiResponse(res.data);
    });
  };
  const updateCity = woeid => {
    GetCityInfo(woeid).then(res => {
      setCityResponse(res.data);
    });
  };
  return (
    <div className="App">
      <Header dark={true} className="head justify-content-center mb-3">
        अंशिका का मौसम पूर्वानुमान
      </Header>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <Search
              handleSearch={handleSearch}
              ApiResponse={ApiResponse}
              updateCity={updateCity}
            />
            {cityResponse && <CityResponse cityResponse={cityResponse} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
