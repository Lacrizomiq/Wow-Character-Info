import { SearchForm } from "../Components/SearchForm";
import { useState } from "react";
import { CharacterInfo } from "../Character/CharacterInfo";

export const Home = () => {
  const [characterData, setCharacterData] = useState(null);

  return (
    <div>
      <h1>Home</h1>
      <SearchForm onCharacterLoad={setCharacterData} />
      {characterData && <CharacterInfo characterData={characterData} />}
    </div>
  );
};
