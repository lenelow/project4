import { createStackNavigator } from "react-navigation";
import HomePage from "./components/HomePage";
import HouseIndex from "./components/HouseIndex";

const App = createStackNavigator({
  Home: { screen: HomePage },
  Houses: { screen: HouseIndex }
});

export default App;
