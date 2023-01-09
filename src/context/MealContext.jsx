import { createContext, useEffect, useState } from "react";

export const MealContext = createContext();

const allMeals = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMeal = "https://www.themealdb.com/api/json/v1/1/random.php";

export const MealProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelecetedMeal] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);

  const fetchMeals = async (url) => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();

      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const fetchRandomMeal = () => {
    fetchMeals(randomMeal);
  };

  useEffect(() => {
    fetchMeals(allMeals);
  }, []);

  useEffect(() => {
    if (!searchTerm) return;
    fetchMeals(`${allMeals}${searchTerm}`);
  }, [searchTerm]);

  const addFavorites = (idMeal) => {
    const meal = meals.find((meal) => meal.idMeal === idMeal);
    const alreadyFavorite = favorites.find((meal) => meal.idMeal === idMeal);
    if (alreadyFavorite) return;
    const updateFavorites = [...favorites, meal];
    setFavorites(updateFavorites);
  };

  const removeFromFavorites = (idMeal) => {
    const updateFavorites = favorites.filter((meal) => meal.idMeal !== idMeal);
    setFavorites(updateFavorites);
  };

  return (
    <MealContext.Provider
      value={{
        meals,
        isLoading,
        setSearchTerm,
        fetchRandomMeal,
        favorites,
        addFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </MealContext.Provider>
  );
};
