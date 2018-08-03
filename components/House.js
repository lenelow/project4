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
          <Text>loading</Text>
        </View>
      );
    }
    return (
      <View>
        <Text style={{ textAlign: "center", fontSize: 20, marginVertical: 5 }}>
          {this.props.house.name}
        </Text>
        <Text style={{ marginVertical: 5, marginLeft: 10, fontSize: 15 }}>
          <Text style={{ fontWeight: "bold" }}>Region: </Text>
          {this.props.house.region}
        </Text>
        <Text style={{ marginVertical: 5, marginLeft: 10, fontSize: 15 }}>
          <Text style={{ fontWeight: "bold" }}>Sigil: </Text>
          {this.props.house.coatOfArms}
        </Text>
        <Text>{this.props.house.words}</Text>
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
