import { GridMeals, Loading, Notfound } from "../components";
import { useGlobalContext } from "../hooks/useGlobalcontext";

export const MealsPage = () => {
  const { meals, isLoading  } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  if(meals.length < 1) {
    return <Notfound/>
  }

  return (
    <main className="w-[95%] grid place-content-center sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto mt-5 overflow-hidden">
      {meals.map((singleMeals) => (
        <GridMeals key={singleMeals.idMeal} singleMeals={singleMeals} />
      ))}
    </main>
  );
};
