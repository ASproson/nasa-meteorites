import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

const apiUrl = "https://data.nasa.gov/resource/gh4g-9sfh.json";

function App() {
  const [data, setData] = useState();

  const testData = [
    {
      name: "Aachen",
      id: 1,
      mass: 21,
      fall: "fell",
      year: "1880-01-01T00:00:00.000",
      geolocation: { latitude: "50.775", longitude: "6.08333" },
    },
    {
      name: "Kaachen",
      id: 2,
      mass: 200,
      fall: "fell",
      year: "1900-01-01T00:00:00.000",
      geolocation: { latitude: "80.2398", longitude: "2.04443" },
    },
  ];

  // useEffect(() => {
  //   axios
  //     .get(apiUrl)
  //     .then((response) => {
  //       console.log("calling...");
  //       setData(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // if (data) {
  //   console.log(data[0].geolocation.longitude);
  //   console.log(data[0].geolocation.latitude);
  // }

  // console.log(testData[0].geolocation);

  return (
    <div>
      <h1 className="text-3xl text-center pt-10 pb-6">NASA Meteorites</h1>
      <div>
        {testData?.map((meteorite) => {
          return (
            <div key={meteorite.id} className="flex justify-center">
              <div className="m-2 border-2 border-blue-300 p-4 rounded-md">
                <p>Name: {meteorite.name}</p>
                <p>Mass: {meteorite.mass}</p>
                <p>Fell: {meteorite.fall}</p>
                <p>Year: {String(meteorite.year).slice(0, 10)}</p>
                <p>Longitude: {meteorite.geolocation?.longitude}</p>
                <p>Latitude: {meteorite.geolocation?.latitude}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
