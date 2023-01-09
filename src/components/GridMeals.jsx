import { FiThumbsUp } from "react-icons/fi";
import { useGlobalContext } from "../hooks/useGlobalcontext";

export const GridMeals = ({ singleMeals }) => {
  const { addFavorites, removeFromFavorites } = useGlobalContext();
  return (
    <section className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
      <img
        className="w-full rounded-t-lg"
        src={singleMeals.strMealThumb}
        alt="img-meal"
      />
      <div className="px-6 py-4 flex items-center justify-between ">
        <h2 className="font-medium text-xl">{singleMeals.strMeal}</h2>
        <button onClick={ ()=> addFavorites(singleMeals.idMeal)} className="hover:translate-y-1 transition-transform ease-in duration-150">
          <FiThumbsUp />
        </button>
      </div>
    </section>
  );
};
