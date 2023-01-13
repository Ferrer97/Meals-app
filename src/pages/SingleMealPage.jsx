import { useNavigate } from "react-router-dom";
import { Loading } from "../components";
import { useGlobalContext } from "../hooks/useGlobalcontext";

export const SingleMealPage = () => {
  const { selectedMeal, isLoading } = useGlobalContext();
  const {
    strInstructions,
    strMealThumb: image,
    strMeal,
    strArea,
    strCategory,
  } = selectedMeal;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  if (isLoading) {
    return <Loading />;
  }
  
  return (
    <section className="min-h-screen">
      <div className="max-w-xs mx-auto lg:max-w-4xl">
      <button
        onClick={handleClick}
        className="shadow-md ml-1 text-white font-medium py-1 px-4 bg-blue-600 rounded my-2 text-sm"
      >
        Back
      </button>
      <div className="lg:grid lg:grid-cols-[250px_minmax(280px,_1fr)_100px] lg:grid-flow-row lg:overflow-hidden">
        <img
          src={image}
          className="max-w-[100%]"
          alt={strMeal}
        />
        <div className="px-2 py-0">
          <p className="mb-1 text-lg font-semibold text-primary-500">
            {strMeal}
          </p>
          <p className="text-gray-500">{strInstructions}</p>
          <div className="mt-4 flex gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
              {strArea}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
              {strCategory}
            </span>
          </div>
        </div>
      </div>
        
      </div>
    </section>
  );
};
