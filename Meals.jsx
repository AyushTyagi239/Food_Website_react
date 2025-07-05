import MealItem from "./MealItem.jsx";
import useHttp from "../Hooks/usehttp.js";

const requestConfig ={}
export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp('http://localhost:3000/meals',requestConfig,[]);
if(isLoading){
    <p className="center">Fetching Meals...</p>
}
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}