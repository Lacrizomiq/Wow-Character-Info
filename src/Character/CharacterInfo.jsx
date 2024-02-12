import { useLocation } from "react-router-dom";

export const CharacterInfo = () => {
  const location = useLocation();
  const characterData = location.state?.characterData;

  return (
    <div>
      <h2>Character Info</h2>
      {characterData ? (
        <div>
          <h3>{characterData.name}</h3>
          <img
            src={characterData.thumbnail_url}
            alt={`${characterData.name} avatar`}
          />
          <p>
            {characterData.active_spec_name} {characterData.class}
          </p>
          <p>
            {characterData.realm} - {characterData.region}
          </p>
          <p>Item Level: {characterData.gear.item_level_equipped}</p>
        </div>
      ) : (
        <p>No character data found</p>
      )}
    </div>
  );
};

// {
//   "name": "Ouimagatée",
//   "race": "Night Elf",
//   "class": "Priest",
//   "active_spec_name": "Shadow",
//   "active_spec_role": "DPS",
//   "gender": "female",
//   "faction": "alliance",
//   "achievement_points": 20330,
//   "honorable_kills": 0,
//   "thumbnail_url": "https://render.worldofwarcraft.com/eu/character/silvermoon/33/204820513-avatar.jpg?alt=/wow/static/images/2d/avatar/4-1.jpg",
//   "region": "eu",
//   "realm": "Silvermoon",
//   "last_crawled_at": "2024-02-08T23:58:24.000Z",
//   "profile_url": "https://raider.io/characters/eu/silvermoon/Ouimagatée",
//   "profile_banner": "alliancebanner1"
// }
