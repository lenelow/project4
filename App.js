import { createStackNavigator } from "react-navigation";
import HomePage from "./components/HomePage";
import HouseIndex from "./components/HouseIndex";
import House from "./components/House";
import Character from "./components/Character";
import CharacterIndex from "./components/CharacterIndex";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import React, { Component } from "react";
import { AppRegistry } from "react-native";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const Routes = createStackNavigator({
  Home: { screen: HomePage },
  Houses: { screen: HouseIndex },
  House: { screen: House },
  Characters: { screen: CharacterIndex },
  Character: { screen: Character }
});

export default class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Routes />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("ASOIAF", () => App);
