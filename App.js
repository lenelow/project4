import { createStackNavigator } from "react-navigation";
import HomePage from "./components/HomePage";
import HouseIndex from "./components/HouseIndex";
import House from "./components/House";
import Character from "./components/Character";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const Routes = createStackNavigator({
  Home: { screen: HomePage },
  Houses: { screen: HouseIndex },
  House: { screen: House },
  Character: { screen: Character }
});

class App extends React.Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
