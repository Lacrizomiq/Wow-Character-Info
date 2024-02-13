import { Wowhead } from "./Community/Wowhead";
import { IcyVeins } from "./Community/IcyVeins";
import { RaiderIo } from "./Community/RaiderIo";

export const CommunityHighlight = () => {
  return (
    <div className="flex m-4">
      <Wowhead />
      <IcyVeins />
      <RaiderIo />
    </div>
  );
};
