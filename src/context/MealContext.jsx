import { createContext, useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";

export const MealContext = createContext();

const allMeals = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMeal = "https://www.themealdb.com/api/json/v1/1/random.php";

const getFavoritesFromLocalStorage = () => {
  let favorites = localStorage.getItem("favorites");
  if (favorites) {
    favorites = JSON.parse(localStorage.getItem("favorites"));
  } else {
    favorites = [];
  }
  return favorites;
};

export const MealProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelecetedMeal] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage());
  const navigate = useNavigate();

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

  const selectMeal = (idMeal, favoriteMeal) => {
    let meal;
    if (favoriteMeal) {
      meal = favorites.find((meal) => meal.idMeal === idMeal);
    } else {
      meal = meals.find((meal) => meal.idMeal === idMeal);
    }
    setSelecetedMeal(meal);
    navigate(`Meals-app/${meal.idMeal}`);
  };

  const addFavorites = (idMeal) => {
    const meal = meals.find((meal) => meal.idMeal === idMeal);
    const alreadyFavorite = favorites.find((meal) => meal.idMeal === idMeal);
    if (alreadyFavorite) return;
    const updateFavorites = [...favorites, meal];
    setFavorites(updateFavorites);
    localStorage.setItem("favorites", JSON.stringify(updateFavorites));
  };

  const removeFromFavorites = (idMeal) => {
    const updateFavorites = favorites.filter((meal) => meal.idMeal !== idMeal);
    setFavorites(updateFavorites);
    localStorage.setItem("favorites", JSON.stringify(updateFavorites));
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
        selectMeal,
        selectedMeal,
      }}
    >
      {children}
    </MealContext.Provider>
  );
};
