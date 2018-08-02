import React, { Component } from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { connect } from "react-redux";
import { fetchAndHandleHouse } from "../actions/houses";

class House extends Component {
  static navigationOptions = {
    title: "Name of Character"
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAndHandleHouse(this.props.url);
  }

  render() {
    return (
      <View>
        <Text>{this.props.house.name}</Text>
        <Text>{this.props.house.region}</Text>
        <Text>{this.props.house.coatOfArms}</Text>
        <Text>{this.props.house.words}</Text>
        <Text>{this.props.house.currentLord}</Text>
        <Text>{this.props.house.heir}</Text>
        <Text>{this.props.house.overlord.currentLord.name}</Text>
        <Text>{this.props.house.ancestralWeapons}</Text>
      </View>
    );
  }
}
const mapStateToProps = ({ houses }) => ({
  house: houses.house,
  url: houses.url
});

const mapDispatchToProps = dispatch => ({
  fetchAndHandleHouse: id => dispatch(fetchAndHandleHouse(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(House);

AppRegistry.registerComponent("ASOIAF", () => House);
