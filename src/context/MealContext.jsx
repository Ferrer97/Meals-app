import { createContext, useEffect, useState } from "react";

export const MealContext = createContext();

const allMeals = "https://www.themealdb.com/api/json/v1/1/search.php?s=a";
const randomMeal = "https://www.themealdb.com/api/json/v1/1/random.php";

export const MealProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const fechMeals = async (url) => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setMeals(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fechMeals(allMeals);
  }, []);
  return (
    <MealContext.Provider value={{ meals }}>{children}</MealContext.Provider>
  );
};
