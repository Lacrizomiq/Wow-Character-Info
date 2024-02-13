import { SearchComponents } from "./SearchComponents";
import { CommunityHighlight } from "./CommunityHighlight";

export const Home = () => {
  return (
    <div>
      <SearchComponents />
      <div>
        <CommunityHighlight />
      </div>
    </div>
  );
};
