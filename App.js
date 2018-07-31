import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.intro}>
          <Text style={{ fontSize: 50 }}>ASOIAF</Text>
          <Text style={{ fontSize: 15 }}>
            A Searchable Overview Involving All Families
          </Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
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

export default App;

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
    backgroundColor: "#DDDDDD",
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  countText: {
    color: "#FF00FF"
  }
});
