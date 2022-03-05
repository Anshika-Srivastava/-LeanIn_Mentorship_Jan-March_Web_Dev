import Card from "../Bootstrap/Card";

const CityResponse = ({ cityResponse }) => {
  return (
    <div className="CityResponse">
      <Card
        Header={
          <>
            {cityResponse.title}
            <span className="badge badge-info badge-pill float-right">
              {cityResponse.location_type}
            </span>
          </>
        }
        className="mt-2"
      >
        <p>Min Temp: {cityResponse.consolidated_weather[0].min_temp} &deg;C</p>
        <p>Max Temp: {cityResponse.consolidated_weather[0].max_temp} &deg;C</p>
        <p>Humidity: {cityResponse.consolidated_weather[0].humidity}%</p>
        <p>
          Weather State:{" "}
          {cityResponse.consolidated_weather[0].weather_state_name}
        </p>
      </Card>
    </div>
  );
};

export default CityResponse;
