import { useState } from "react";
import Card from "../Bootstrap/Card";
import FormGroup from "../Bootstrap/FormGroup";

const Search = ({ handleSearch, ApiResponse, updateCity }) => {
  const [city, setCity] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim().length === 0) alert("Please enter a valid city");
    handleSearch(city);
  };
  return (
    <div className="Search">
      <Card
        Header="Search for your Favourite City"
        FooterElems={
          ApiResponse &&
          ApiResponse.length > 0 && (
            <ul className="list-group list-group-flush">
              <li className="list-group-item list-group-item-info">
                Search Results
              </li>
              {ApiResponse.map((city) => (
                <li
                  className="list-group-item list-group-item-action"
                  key={city.woeid}
                  onClick={() => updateCity(city.woeid)}
                >
                  {city.title}
                  <span className="badge badge-info badge-pill float-right">
                    {city.location_type}
                  </span>
                </li>
              ))}
            </ul>
          )
        }
      >
        <form onSubmit={handleSubmit}>
          <FormGroup
            Label="City"
            Placeholder="Please enter a City name to search..."
            Value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <input type="submit" className="btn btn-primary" value="Search" />
        </form>
      </Card>
    </div>
  );
};

export default Search;
