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

  const meteoriteImgs = [
    {
      id: 0,
      url: "https://solarsystem.nasa.gov/system/resources/list_images/2240_Bennu-Survey_320.jpg",
    },
    {
      id: 1,
      url: "https://solarsystem.nasa.gov/system/resources/list_images/1031_ida_dactyl_320.jpg",
    },
    {
      id: 2,
      url: "https://solarsystem.nasa.gov/system/resources/list_images/782_PIA02487_thumb.jpg",
    },
  ];

  const getRandomMeteoriteImg = () => {
    let randomNum = Math.floor(Math.random() * meteoriteImgs.length);
    return meteoriteImgs[randomNum];
  };

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
      <h1 className="text-3xl font-bold text-center pt-10 pb-6">
        NASA Meteorites
      </h1>
      <div>
        {testData?.map((meteorite) => {
          return (
            <div key={meteorite.id} className="flex justify-center">
              <div className="m-2 border-2 border-blue-300 p-4 rounded-md w-[350px]">
                <p className="text-2xl font-bold text-center pb-2">
                  {meteorite.name}
                </p>
                <div className="flex justify-center">
                  <img
                    src={getRandomMeteoriteImg().url}
                    alt="Meteorite"
                    className="rounded-md w-[250px] h-[200px] mb-2"
                  />
                </div>
                <div className="pl-8 pt-2 pb-2">
                  <p>
                    <span className="font-bold">Mass:</span> {meteorite.mass}
                  </p>
                  <p>
                    <span className="font-bold">Fell:</span> {meteorite.fall}
                  </p>
                  <p>
                    <span className="font-bold">Year:</span>{" "}
                    {String(meteorite.year).slice(0, 10)}
                  </p>
                  <p>
                    <span className="font-bold">Longitude:</span>{" "}
                    {meteorite.geolocation?.longitude}
                  </p>
                  <p>
                    <span className="font-bold">Latitude:</span>{" "}
                    {meteorite.geolocation?.latitude}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
