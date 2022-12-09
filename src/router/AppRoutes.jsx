import { Routes, Route, Navigate } from "react-router-dom";
import { MealProvider } from "../context/MealContext";

import { FavoritesMealPage, MealsPage, SingleMealPage } from "../pages";

export const AppRoutes = () => {
  return (
    <MealProvider>
      <Routes>
        <Route path="/" element={<MealsPage />} />
        <Route path="/:id" element={<SingleMealPage />} />
        <Route path="/favorites" element={<FavoritesMealPage />} />
        <Route path="*" element={<Navigate to={<MealsPage />} />} />
      </Routes>
    </MealProvider>
  );
};
