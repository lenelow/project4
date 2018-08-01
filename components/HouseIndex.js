import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  View,
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
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }

  renderItem({ item, index }) {
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
  houses: houses.houses
});

const mapDispatchToProps = dispatch => ({
  fetchAndHandleHouses: id => dispatch(fetchAndHandleHouses(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HouseIndex);

AppRegistry.registerComponent("ASOIAF", () => HouseIndex);
