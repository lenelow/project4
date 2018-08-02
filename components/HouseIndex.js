import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  AppRegistry,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";
import { fetchAndHandleHouses, setHouse } from "../actions/houses";
import Pagination from "./Pagination";

class HouseIndex extends Component {
  static navigationOptions = {
    title: "Houses of Westeros"
  };
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchAndHandleHouses();
  }

  navigateToHouse(url) {
    const { navigate } = this.props.navigation;
    this.props.setHouse(url);
    navigate("House");
  }

  render() {
    return (
      <View style={styles.list}>
        <Text>Houses</Text>
        <ScrollView automaticallyAdjustContentInsets={false}>
          {this.props.houses.map(house => (
            <TouchableHighlight onPress={() => this.navigateToHouse(house.url)}>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    textDecorationLine: "underline",
                    lineHeight: 30
                  }}
                >
                  {house.name}
                </Text>
              </View>
            </TouchableHighlight>
          ))}
        </ScrollView>
        <Pagination />
      </View>
    );
  }
}

const mapStateToProps = ({ houses }) => ({
  houses: houses.houses,
  url: houses.url
});

const mapDispatchToProps = dispatch => ({
  fetchAndHandleHouses: id => dispatch(fetchAndHandleHouses(id)),
  setHouse: url => dispatch(setHouse(url))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HouseIndex);

const styles = StyleSheet.create({
  list: {
    marginLeft: 40
  }
});

AppRegistry.registerComponent("ASOIAF", () => HouseIndex);
