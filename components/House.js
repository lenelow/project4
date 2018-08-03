import React, { Component } from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { connect } from "react-redux";
import { fetchAndHandleHouses } from "../actions/houses";

class House extends Component {
  static navigationOptions = {
    title: "Name of Character"
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAndHandleHouses();
  }

  render() {
    if (!this.props.house) {
      return (
        <View>
          <Text>laoding</Text>
        </View>
      );
    }
    return (
      <View>
        <Text>{this.props.house.name}</Text>
        <Text>{this.props.house.region}</Text>
        <Text>{this.props.house.coatOfArms}</Text>
        <Text>{this.props.house.words}</Text>
        <Text>{this.props.house.currentLord}</Text>
        <Text>{this.props.house.heir}</Text>
        <Text>{this.props.house.overlord}</Text>
        <Text>{this.props.house.ancestralWeapons}</Text>
      </View>
    );
  }
}
const mapStateToProps = ({ houses }) => ({
  house: houses.houses.find(house => house.url === houses.url)
});

const mapDispatchToProps = dispatch => ({
  fetchAndHandleHouses: () => dispatch(fetchAndHandleHouses())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(House);

AppRegistry.registerComponent("ASOIAF", () => House);
