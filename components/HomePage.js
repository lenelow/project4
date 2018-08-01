import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

export default class HomePage extends Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.intro}>
          <Text style={{ fontSize: 50 }}>ASOIAF</Text>
          <Text style={{ fontSize: 15 }}>
            A Searchable Overview Involving All Families
          </Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate("Houses")}
          >
            <Text> Who's Who? </Text>
          </TouchableOpacity>
          <View style={[styles.countContainer]}>
            <Text style={[styles.countText]} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  intro: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#91AEBF",
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  countText: {
    color: "#FF00FF"
  }
});

AppRegistry.registerComponent("ASOIAF", () => HomePage);
