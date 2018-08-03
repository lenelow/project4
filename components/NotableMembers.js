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
import { fetchAndHandleCharacters, setCharacters } from "../actions/characters";
import Pagination from "./Pagination";

class NotableMembers extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchAndHandleCharacters();
  }

  navigateToMember(swornMembers) {
    const { navigate } = this.props.navigation;
    this.props.setCharacters(swornMembers);
    navigate("Character");
  }

  render() {
    return (
      <View style={styles.list}>
        <ScrollView automaticallyAdjustContentInsets={false}>
          {this.props.houses.map(house => (
            <TouchableHighlight
              onPress={() => this.navigateToCharacter(house.swornMember)}
            >
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    textDecorationLine: "underline",
                    lineHeight: 30
                  }}
                >
                  {house.swornMember}
                </Text>
              </View>
            </TouchableHighlight>
          ))}
        </ScrollView>
        <Pagination />
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
  houses: houses.houses,
  swornMembers: houses.swornMembers
});

const mapDispatchToProps = dispatch => ({
  fetchAndHandleCharacters: () => dispatch(fetchAndHandleCharacters()),
  setMembers: swornMembers => dispatch(setCharacters(swornMembers))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotableMembers);

const styles = StyleSheet.create({
  list: {
    marginLeft: 40
  }
});

AppRegistry.registerComponent("ASOIAF", () => NotableMembers);
