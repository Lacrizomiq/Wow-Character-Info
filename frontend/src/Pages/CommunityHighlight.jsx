import { Wowhead } from "./Community/Wowhead";
import { IcyVeins } from "./Community/IcyVeins";
import { RaiderIo } from "./Community/RaiderIo";
import { useEffect, useState } from "react";

export const CommunityHighlight = () => {
  const [communityData, setCommunityData] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:3001/")
        .then((res) => res.json())
        .then((data) => setCommunityData(data))
        .catch((err) => console.error("Error fetching data: ", err));
    } catch (err) {
      console.error("Error fetching data: ", err);
    }
  }, []);

  return (
    <div className="flex m-4">
      {communityData.map((data, index) => {
        const { title, description, link } = data;
        return (
          <div key={index} className="p-2 m-4 border-2 shadow-lg">
            <h1>{title}</h1>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noreferrer">
              <button className="px-4 py-2 m-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                Learn more
              </button>
            </a>
          </div>
        );
      })}
    </div>
  );
};
