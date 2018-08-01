import React, { Component } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  AppRegistry,
  TouchableHighlight
} from "react-native";
import { connect } from "react-redux";
import { fetchAndHandleHouses } from "../actions/houses";

class HouseIndex extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchAndHandleHouses();
  }

  render() {
    return (
      <View>
        <FlatList
          ref="listRef"
          data={this.props.houses}
          renderItem={this.renderItem}
          keyExtractor={index => index}
        />
      </View>
    );
  }

  renderItem({ item }) {
    return (
      <TouchableHighlight>
        <View>
          <Text>{item.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const mapStateToProps = ({ houses }) => ({
  houses: houses.house
});

const mapDispatchToProps = dispatch => ({
  fetchAndHandleHouses: id => dispatch(fetchAndHandleHouses(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HouseIndex);

AppRegistry.registerComponent("ASOIAF", () => HouseIndex);
