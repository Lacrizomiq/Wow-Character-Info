import { useLocation } from "react-router-dom";

export const CharacterDetails = () => {
  const location = useLocation();
  const characterData = location.state?.characterData;

  return (
    <div className="flex flex-row">
      <img
        src={characterData.thumbnail_url}
        alt={`${characterData.name} avatar`}
      />
      <div>
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
      <div></div>
    </div>
  );
};
