import { createStackNavigator } from "react-navigation";
import HomePage from "./components/HomePage";
import HouseIndex from "./components/HouseIndex";
import House from "./components/House";

const App = createStackNavigator({
  Home: { screen: HomePage },
  Houses: { screen: HouseIndex },
  House: { screen: House },
  Character: { screen: Character }
});

export default App;
