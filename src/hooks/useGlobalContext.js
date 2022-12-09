import { useContext } from "react";
import { MealContext } from "../context/MealContext";

export const useGlobalContext = () => {
  return useContext(MealContext);
};
