import { MealProvider } from "./context/MealContext";
import { AppRoutes } from "./router/AppRoutes";

function App() {
  return (
    <MealProvider>
      <AppRoutes />;
    </MealProvider>
  );
}

export default App;
