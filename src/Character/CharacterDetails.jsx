import { useLocation } from "react-router-dom";

export const CharacterDetails = () => {
  const location = useLocation();
  const characterData = location.state?.characterData;

  return (
    <div className="flex flex-row mx-4 mt-4 border-b-4 bg-blue-50">
      <img
        src={characterData.thumbnail_url}
        alt={`${characterData.name} avatar`}
        className="object-cover object-center w-32 h-32 border-2 border-gray-800 shadow-lg"
      />
      <div className="flex flex-col justify-center gap-2 ml-4">
        <div>
          <h3>
            {characterData.name} - {characterData.active_spec_name}{" "}
            {characterData.class}
          </h3>
        </div>
        <div>
          <p>Item Level: {characterData.gear.item_level_equipped}</p>
        </div>
      </div>
    </div>
  );
};
