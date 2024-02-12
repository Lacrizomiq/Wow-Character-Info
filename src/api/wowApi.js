import axios from "axios";

const BASE_URL = "https://raider.io/api/v1/characters/profile";

export const fetchCharacterProfile = async (region, realm, characterName) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        region,
        realm,
        name: characterName,
        fields: "gear,talents",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// export const fetchBlizzardCharacterItems = async (
//   region,
//   realm,
//   characterName,
//   access_token
// ) => {
//   const BLIZZARD_API_URL = `https://${region}.api.blizzard.com/profile/wow/character/${realm}/${characterName.toLowerCase()}`;

//   try {
//     const response = await axios.get(BLIZZARD_API_URL, {
//       params: {
//         namespace: `profile-${region}`,
//         locale: "en_US",
//         access_token: access_token,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response.data.message);
//   }
// };
