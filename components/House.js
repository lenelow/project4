import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

class House extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAndHandleHouse(this.props.match.params.id);
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
  house: houses.house
});

const mapDispatchToProps = dispatch => ({
  fetchAndHandleHouse: id => dispatch(fetchAndHandleHouse(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(House);
