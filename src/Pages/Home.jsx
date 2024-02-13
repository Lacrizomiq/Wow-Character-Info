import { SearchForm } from "../Components/SearchForm";
import { useState } from "react";
import { CharacterInfo } from "../Character/CharacterInfo";
import homebg from "../assets/home-bg.png";

export const Home = () => {
  const [characterData, setCharacterData] = useState(null);

  return (
    <div
      style={{ backgroundImage: `url(${homebg})`, height: "66vh" }}
      className="flex flex-col items-center justify-center gap-4 bg-center bg-cover"
    >
      <SearchForm onCharacterLoad={setCharacterData} />
      {characterData && <CharacterInfo characterData={characterData} />}
    </div>
  );
};
