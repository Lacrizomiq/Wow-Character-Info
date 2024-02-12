import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Home } from "./Pages/Home";
import { CharacterInfo } from "./Character/CharacterInfo";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="character" element={<CharacterInfo />} />
    </Route>
  )
);

export function App() {
  return <RouterProvider router={router} />;
}
