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
  static navigationOptions = {
    title: "Houses of Westeros"
  };
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchAndHandleHouses();
  }

  render() {
    return (
      <View style={styles.list}>
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
      <TouchableHighlight onPress={() => this.props.navigation("House")}>
        <View>
          <Text
            style={{
              fontSize: 20,
              textDecorationLine: "underline",
              lineHeight: 30
            }}
          >
            {item.name}
          </Text>
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

const styles = StyleSheet.create({
  list: {
    marginLeft: 40
  }
});

AppRegistry.registerComponent("ASOIAF", () => HouseIndex);
