import { SearchForm } from "../Components/SearchForm";
import { useState } from "react";
import { CharacterInfo } from "../Character/CharacterInfo";
import homebg from "../assets/home-bg.png";

export const SearchComponents = () => {
  const [characterData, setCharacterData] = useState(null);

  return (
    <div
      style={{ backgroundImage: `url(${homebg})`, height: "66vh" }}
      className="flex flex-col items-center justify-center gap-4 bg-center bg-cover"
    >
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold text-center">
          Welcome to WoW Character Finder
        </h1>
        <p className="text-center text-gray">
          Search for a character to get started
        </p>
      </div>
      <SearchForm onCharacterLoad={setCharacterData} />
      {characterData && <CharacterInfo characterData={characterData} />}
    </div>
  );
};
