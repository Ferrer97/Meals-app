import { useGlobalContext } from "../hooks/useGlobalcontext";

export const Favorites = () => {
  const { favorites, selectedMeal, removeFromFavorites } = useGlobalContext();
  return (
    <section className="bg-gray-600 p-2 text-white w-full">
      <div>
        <h5>Favorites</h5>
        <div className="flex flex-wrap gap-1">
          {favorites.map((item) => {
            const { idMeal, strMealThumb } = item;
            return (
              <div className="" key={idMeal}>
                <img className="w-16 rounded-full border-solid
                border-white border-2 cursor-pointer " src={strMealThumb} alt="image-meal" />
                <button className="text-center cursor-pointer mt-1 bg-transparent border-transparent hover:text-black text-white transition-all" onClick={() => removeFromFavorites(idMeal)}>
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
