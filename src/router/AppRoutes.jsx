import { Routes, Route, Navigate } from "react-router-dom";
import { Search } from "../components";
import { Favorites } from "../components/Favorites";
import { useGlobalContext } from "../hooks/useGlobalcontext";

import { FavoritesMealPage, MealsPage, SingleMealPage } from "../pages";

export const AppRoutes = () => {
  const {favorites} = useGlobalContext();
  return (
    <>
      <Search />
      {favorites.length > 0 && <Favorites/>}
      <Routes>
        <Route path="/" element={<MealsPage />} />
        <Route path="/:id" element={<SingleMealPage />} />
        <Route path="/favorites" element={<FavoritesMealPage />} />
        <Route path="*" element={<Navigate to={<MealsPage />} />} />
      </Routes>
    </>
  );
};
