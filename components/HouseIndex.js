import React, { Component } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  ActivityIndicator,
  TouchableHighlight,
  ActionSheetIOS
} from "react-native";
import { connect } from "react-redux";

class HouseIndex extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchAndHandlesHouses();
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
  houses: houses.house
});

const mapDispatchToProps = dispatch => ({
  fetchAndHandleHouses: id => dispatch(fetchAndHandleHouses(id))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HouseIndex);
