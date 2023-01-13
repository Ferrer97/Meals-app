import { Routes, Route, Navigate } from "react-router-dom";
import { Search } from "../components";
import { Favorites } from "../components/Favorites";
import { useGlobalContext } from "../hooks/useGlobalcontext";

import {MealsPage, SingleMealPage } from "../pages";

export const AppRoutes = () => {
  const {favorites} = useGlobalContext();
  return (
    <>
      <Search />
      {favorites.length > 0 && <Favorites/>}
      <Routes>
        <Route path="/Meals-app" element={<MealsPage />} />
        <Route path="/Meals-app/:id" element={<SingleMealPage />} />
        <Route path="*" element={<Navigate to="/Meals-app" />} />
      </Routes>
    </>
  );
};
