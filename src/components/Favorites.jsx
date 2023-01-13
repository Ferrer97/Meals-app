import { useGlobalContext } from "../hooks/useGlobalcontext";

export const Favorites = () => {
  const { favorites, selectMeal, removeFromFavorites } = useGlobalContext();
  return (
    <section className="bg-gray-600 p-2 text-white w-full mx-auto my-2 rounded-sm">
      <div>
        <h5 className="text-center text-xl">Favorites</h5>
        <div className="flex flex-wrap gap-2">
          {favorites.map((item) => {
            const { idMeal, strMealThumb } = item;
            return (
              <div className="" key={idMeal}>
                <img onClick={ () => selectMeal(idMeal, true)} className="w-16 rounded-full border-solid
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
