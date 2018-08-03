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
import { fetchAndHandleCharacters, setCharacter } from "../actions/characters";
import Pagination from "./Pagination";

class CharacterIndex extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchAndHandleCharacters();
  }

  navigateToCharacter(url) {
    const { navigate } = this.props.navigation;
    this.props.setCharacter(url);
    navigate("Character");
  }

  render() {
    return (
      <View style={styles.list}>
        <ScrollView automaticallyAdjustContentInsets={false}>
          {this.props.characters.map(character => (
            <TouchableHighlight
              onPress={() => this.navigateToCharacter(character.url)}
            >
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    textDecorationLine: "underline",
                    lineHeight: 30
                  }}
                >
                  {character.aliases}
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
      <TouchableHighlight onPress={() => this.props.navigation("Character")}>
        <View>
          <Text
            style={{
              fontSize: 20,
              textDecorationLine: "underline",
              lineHeight: 30
            }}
          >
            {item.aliases}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const mapStateToProps = ({ characters }) => ({
  characters: characters.characters,
  url: characters.url
});

const mapDispatchToProps = dispatch => ({
  fetchAndHandleCharacters: () => dispatch(fetchAndHandleCharacters()),
  setCharacter: url => dispatch(setCharacter(url))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterIndex);

const styles = StyleSheet.create({
  list: {
    marginLeft: 40
  }
});

AppRegistry.registerComponent("ASOIAF", () => CharacterIndex);
