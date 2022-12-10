import { useState } from "react";
import { useGlobalContext } from "../hooks/useGlobalcontext";

export const Search = () => {
  const [text, setText] = useState("");
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();

  const handleChange = (evt) => {
    const value = evt.target.value;
    setText(value);
  };

  const handleSumit = (evt) => {
    evt.preventDefault();
    if (text) {
      setSearchTerm(text);
    }
  };

  const handleRandomMeal = () => {
    setSearchTerm("");
    fetchRandomMeal();
  };
  return (
    <header className="flex items-center justify-center">
      <form
        onSubmit={handleSumit}
        className="flex gap-2 my-2 items-center justify-center flex-wrap"
      >
        <input
          onChange={handleChange}
          className="bg-blue-100 rounded-lg py-1 px-2 text-sm font-medium"
          type="text"
          placeholder="type favorite meal"
        />
        <button
          className="text-white text-sm max-w-full bg-blue-700 hover:bg-blue-800 font-medium rounded-lg px-3 py-1"
          type="submit"
        >
          Search
        </button>
        <button
          onClick={handleRandomMeal}
          className="text-white text-sm max-w-full bg-blue-700 hover:bg-blue-800 font-medium rounded-lg px-3 py-1"
          type="button"
        >
          Surprise me
        </button>
      </form>
    </header>
  );
};
