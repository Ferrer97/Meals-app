import { useGlobalContext } from "../hooks/useGlobalcontext";

export const MealsPage = () => {
  const {meals} = useGlobalContext();

  return (
    <main>
      {meals.meals.map((singleMeals) => {
        const { idMeal, strMeal: title, strMealThumb: image } = singleMeals;
        return (
          <section key={idMeal}>
            <img src={image} alt="img-meal" />
            <h2>{title}</h2>
          </section>
        );
      })}
    </main>
  );
};
